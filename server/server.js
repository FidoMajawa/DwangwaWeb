import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from './db.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'dwangwa-super-secret-key';

// Open CORS to prevent any blocking issues between Render and Vercel
app.use(cors());
app.use(express.json());

// Serve uploads folder as static files
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Configure Multer for File Uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync('uploads')) {
      fs.mkdirSync('uploads');
    }
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Root path for testing if the server is alive from a browser
app.get('/', (req, res) => {
  res.send('Dwangwa CCAP Backend Server is correctly running!');
});

// Auth Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// LOGIN Endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

      const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '24h' });
      res.json({ token, username: user.username });
    });
  });
});

// UPLOAD Endpoint
app.post('/api/upload', authenticateToken, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }
  // Send back the relative URL path
  const imageUrl = `/uploads/${req.file.filename}`;
  res.json({ imageUrl });
});

// Generic CRUD helpers for SQLite
const getAll = (table) => (req, res) => {
  db.all(`SELECT * FROM ${table}`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

const getById = (table) => (req, res) => {
  db.get(`SELECT * FROM ${table} WHERE id = ?`, [req.params.id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Not found' });
    res.json(row);
  });
};

const deleteById = (table) => (req, res) => {
  db.run(`DELETE FROM ${table} WHERE id = ?`, [req.params.id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Deleted successfully', changes: this.changes });
  });
};

const insertData = (table) => (req, res) => {
  const body = req.body;
  const keys = Object.keys(body);
  const values = Object.values(body);
  const placeholders = keys.map(() => '?').join(',');
  
  db.run(`INSERT INTO ${table} (${keys.join(',')}) VALUES (${placeholders})`, values, function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, ...body });
  });
};

const updateData = (table) => (req, res) => {
  const body = req.body;
  const id = req.params.id;
  
  // Remove id from body to prevent updating the primary key
  const updateBody = { ...body };
  delete updateBody.id;
  
  const keys = Object.keys(updateBody);
  const values = Object.values(updateBody);
  const updates = keys.map(k => `${k} = ?`).join(',');
  
  db.run(`UPDATE ${table} SET ${updates} WHERE id = ?`, [...values, id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: parseInt(id), ...updateBody });
  });
};

// Endpoints
const createCRUDRoutes = (endpoint, table) => {
  app.get(endpoint, getAll(table));
  app.get(`${endpoint}/:id`, getById(table));
  app.post(endpoint, authenticateToken, insertData(table));
  app.put(`${endpoint}/:id`, authenticateToken, updateData(table));
  app.delete(`${endpoint}/:id`, authenticateToken, deleteById(table));
};

createCRUDRoutes('/api/sermons', 'sermons');
createCRUDRoutes('/api/events', 'events');
createCRUDRoutes('/api/news', 'news');
createCRUDRoutes('/api/leaders', 'leaders');
createCRUDRoutes('/api/ministries', 'ministries');
createCRUDRoutes('/api/gallery', 'gallery');

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
