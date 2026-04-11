import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Ministries from './pages/Ministries';
import Sermons from './pages/Sermons';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Contact from './pages/Contact';
import Live from './pages/Live';
import Give from './pages/Give';

// Admin Pages
import Login from './pages/admin/Login';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import ManageSection from './pages/admin/ManageSection';

// CMS Field Configurations
const newsFields = [
  {name: 'title', label: 'Title', required: true},
  {name: 'date', label: 'Date', required: true},
  {name: 'category', label: 'Category', required: true},
  {name: 'excerpt', label: 'Excerpt', type: 'textarea', required: true}
];

const eventsFields = [
  {name: 'title', label: 'Event Title', required: true},
  {name: 'day', label: 'Day (e.g. 28)', required: true},
  {name: 'month', label: 'Month (e.g. Oct)', required: true},
  {name: 'time', label: 'Time (e.g. 09:00 AM)', required: true},
  {name: 'location', label: 'Location', required: true}
];

const sermonsFields = [
  {name: 'title', label: 'Sermon Title', required: true},
  {name: 'preacher', label: 'Preacher', required: true},
  {name: 'date', label: 'Date', required: true},
  {name: 'scripture', label: 'Scripture Reference', required: true},
  {name: 'series', label: 'Series', required: false},
  {name: 'audioUrl', label: 'Upload Audio', type: 'audio', required: false}
];

const leadersFields = [
  {name: 'name', label: 'Name', required: true},
  {name: 'role', label: 'Role', required: true},
  {name: 'imageUrl', label: 'Image Photo', type: 'image', required: true},
  {name: 'bio', label: 'Biography', type: 'textarea', required: true}
];

const ministriesFields = [
  {name: 'title', label: 'Ministry Name', required: true},
  {name: 'description', label: 'Description', type: 'textarea', required: true},
  {name: 'meeting', label: 'Meeting Time', required: false},
  {name: 'iconName', label: 'Icon Name (e.g. Users, Music, Heart)', required: false}
];

const galleryFields = [
  {name: 'title', label: 'Photo Title', required: true},
  {name: 'imageUrl', label: 'Upload Photo', type: 'image', required: true}
];

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col" style={{ minHeight: '100vh' }}>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="news" element={<ManageSection key="news" title="News" endpoint="/api/news" fields={newsFields} />} />
            <Route path="events" element={<ManageSection key="events" title="Events" endpoint="/api/events" fields={eventsFields} />} />
            <Route path="sermons" element={<ManageSection key="sermons" title="Sermons" endpoint="/api/sermons" fields={sermonsFields} />} />
            <Route path="leaders" element={<ManageSection key="leaders" title="Leaders" endpoint="/api/leaders" fields={leadersFields} />} />
            <Route path="ministries" element={<ManageSection key="ministries" title="Ministries" endpoint="/api/ministries" fields={ministriesFields} />} />
            <Route path="gallery" element={<ManageSection key="gallery" title="Gallery" endpoint="/api/gallery" fields={galleryFields} />} />
          </Route>

          {/* Public Routes with nested Header and Footer */}
          <Route path="*" element={
            <>
              <Header />
              <main style={{ flex: 1 }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/leadership" element={<Leadership />} />
                  <Route path="/ministries" element={<Ministries />} />
                  <Route path="/sermons" element={<Sermons />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/live" element={<Live />} />
                  <Route path="/give" element={<Give />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
