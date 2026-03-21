import db from './db.js';
import bcrypt from 'bcryptjs';

const initDatabase = () => {
  db.serialize(() => {
    // Users table for admin
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )`);

    // Sermons table
    db.run(`CREATE TABLE IF NOT EXISTS sermons (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      preacher TEXT,
      date TEXT,
      series TEXT,
      scripture TEXT,
      audioUrl TEXT,
      notesUrl TEXT
    )`);

    // Events table
    db.run(`CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      day TEXT,
      month TEXT,
      title TEXT,
      time TEXT,
      location TEXT,
      description TEXT
    )`);

    // News table
    db.run(`CREATE TABLE IF NOT EXISTS news (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      date TEXT,
      excerpt TEXT,
      content TEXT,
      category TEXT
    )`);

    // Leaders table
    db.run(`CREATE TABLE IF NOT EXISTS leaders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      role TEXT,
      bio TEXT,
      imageUrl TEXT
    )`);

    // Ministries table
    db.run(`CREATE TABLE IF NOT EXISTS ministries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      iconName TEXT,
      description TEXT,
      meeting TEXT
    )`);

    console.log('Tables created or verified.');

    // Seed Admin User
    const adminPassword = process.env.ADMIN_PASSWORD || 'dwangwa123';
    bcrypt.hash(adminPassword, 10, (err, hash) => {
      if (err) return console.error(err);
      db.get(`SELECT * FROM users WHERE username = 'admin'`, [], (err, row) => {
        if (!row) {
          db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, ['admin', hash], (err) => {
            if (err) console.error(err);
            else console.log('Admin user seeded (admin / dwangwa123)');
          });
        }
      });
    });

    // Seed Events
    db.get("SELECT count(*) as count FROM events", [], (err, row) => {
      if (row.count === 0) {
        db.run(`INSERT INTO events (day, month, title, time, location) VALUES 
          ('28', 'Oct', 'Harvest Thanksgiving Service', '09:00 AM', 'Main Sanctuary'),
          ('04', 'Nov', 'Youth Camp Meeting', '08:00 AM', 'Church Grounds - Open Air'),
          ('12', 'Nov', 'Community Outreach', '14:00 PM', 'Dwangwa Trading Centre')`);
        console.log("Seeded basic events");
      }
    });

    // Seed Sermons
    db.get("SELECT count(*) as count FROM sermons", [], (err, row) => {
      if (row.count === 0) {
        db.run(`INSERT INTO sermons (title, preacher, date, series, scripture) VALUES 
          ('Building on the Rock', 'Rev. Emmanuel Phiri', 'Oct 15, 2023', 'Sermon on the Mount', 'Matthew 7:24-27'),
          ('The Good Samaritan', 'Rev. Emmanuel Phiri', 'Oct 8, 2023', 'Parables of Jesus', 'Luke 10:25-37'),
          ('Faith over Fear', 'Elder John Banda', 'Oct 1, 2023', 'Stand Alone', 'Isaiah 41:10')`);
        console.log("Seeded basic sermons");
      }
    });

    // Seed News
    db.get("SELECT count(*) as count FROM news", [], (err, row) => {
      if (row.count === 0) {
        db.run(`INSERT INTO news (title, date, excerpt, category) VALUES 
          ('New Community Outreach Program Launched', 'October 20, 2023', 'We are excited to announce our new monthly outreach program targeting the surrounding villages in Dwangwa...', 'Outreach'),
          ('Church Building Renovation Update', 'October 10, 2023', 'The planned renovations for the main sanctuary roof have officially started. Services will be held in the adjacent hall...', 'Updates'),
          ('Youth Ministry''s Successful Retreat', 'September 28, 2023', 'Over 50 youths attended the annual retreat in Salima, growing in faith and fellowship...', 'Youth')`);
        console.log("Seeded basic news");
      }
    });

    // Seed Leaders
    db.get("SELECT count(*) as count FROM leaders", [], (err, row) => {
      if (row.count === 0) {
        db.run(`INSERT INTO leaders (name, role, bio, imageUrl) VALUES 
          ('Rev. Emmanuel Phiri', 'Senior Pastor', 'Rev. Phiri has been serving at Dwangwa CCAP for over 10 years, leading the congregation in spiritual growth and community outreach.', 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'),
          ('Elder John Banda', 'Session Clerk', 'Elder Banda oversees the administrative life of the church and assists in pastoral care and counseling.', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`);
        console.log("Seeded basic leaders");
      }
    });
    
    // Seed Ministries
    db.get("SELECT count(*) as count FROM ministries", [], (err, row) => {
      if (row.count === 0) {
        db.run(`INSERT INTO ministries (title, iconName, description, meeting) VALUES 
          ('Youth Ministry', 'Sun', 'Empowering the next generation to live for Christ. We hold weekly youth fellowships, camps, and community service projects.', 'Saturdays at 2:00 PM'),
          ('Women''s Guild', 'Heart', 'Women coming together in fellowship, prayer, and service. The Guild plays a central role in caring for the sick and elderly.', 'Thursdays at 3:00 PM')`);
        console.log("Seeded basic ministries");
      }
    });
  });
};

initDatabase();
