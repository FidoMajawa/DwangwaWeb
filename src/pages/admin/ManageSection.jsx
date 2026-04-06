import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const ManageSection = ({ title, endpoint, fields }) => {
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('adminToken');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:5000${endpoint}`);
      if (!res.ok) throw new Error('Fetch failed');
      const json = await res.json();
      setData(json);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  const handleOpenForm = (item = null) => {
    if (item) {
      setIsEditing(true);
      setCurrentId(item.id);
      setFormData(item);
    } else {
      setIsEditing(true);
      setCurrentId(null);
      const emptyForm = {};
      fields.forEach(f => emptyForm[f.name] = '');
      setFormData(emptyForm);
    }
  };

  const handleCloseForm = () => {
    setIsEditing(false);
    setFormData({});
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const isNew = !currentId;
    const method = isNew ? 'POST' : 'PUT';
    const url = `http://localhost:5000${endpoint}${isNew ? '' : '/' + currentId}`;

    try {
      const res = await fetch(url, { method, headers, body: JSON.stringify(formData) });
      if (res.ok) {
        handleCloseForm();
        fetchData();
      } else {
        alert('Error saving record');
      }
    } catch (error) {
       alert('Connection error');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    try {
      const res = await fetch(`http://localhost:5000${endpoint}/${id}`, { method: 'DELETE', headers });
      if (res.ok) fetchData();
    } catch (e) {
      alert('Error deleting');
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: 'var(--color-secondary)', margin: 0 }}>Manage {title}</h1>
        {!isEditing && (
          <button onClick={() => handleOpenForm()} className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem' }}>
            <Plus size={20} /> Add New
          </button>
        )}
      </div>

      {isEditing ? (
        <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>{currentId ? 'Edit' : 'Add'} {title}</h2>
          <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {fields.map((field) => (
              <div key={field.name}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea 
                    value={formData[field.name] || ''} 
                    onChange={e => setFormData({...formData, [field.name]: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'inherit', resize: 'vertical' }}
                    rows={4} required={field.required}
                  />
                ) : (
                  <input 
                    type={field.type || 'text'} 
                    value={formData[field.name] || ''} 
                    onChange={e => setFormData({...formData, [field.name]: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'inherit' }}
                    required={field.required}
                  />
                )}
              </div>
            ))}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button type="submit" className="btn btn-primary">Save Changes</button>
              <button type="button" onClick={handleCloseForm} className="btn btn-outline">Cancel</button>
            </div>
          </form>
        </div>
      ) : (
        <div style={{ background: 'white', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
          {loading ? (
            <div style={{ padding: '2rem', textAlign: 'center' }}>Loading records...</div>
          ) : data.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-text-light)' }}>No records found. Click "Add New" to create one.</div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead style={{ backgroundColor: 'var(--color-background)' }}>
                  <tr>
                    {fields.slice(0, 3).map(f => <th key={f.name} style={{ padding: '1rem', borderBottom: '2px solid #eee' }}>{f.label}</th>)}
                    <th style={{ padding: '1rem', borderBottom: '2px solid #eee', width: '100px', textAlign: 'center' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(item => (
                    <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                      {fields.slice(0, 3).map(f => (
                        <td key={f.name} style={{ padding: '1rem', verticalAlign: 'top' }}>
                          {item[f.name]?.toString().length > 50 ? item[f.name].substring(0, 50) + '...' : item[f.name]}
                        </td>
                      ))}
                      <td style={{ padding: '1rem', verticalAlign: 'top', textAlign: 'center' }}>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                          <button onClick={() => handleOpenForm(item)} style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer' }} title="Edit"><Edit size={18} /></button>
                          <button onClick={() => handleDelete(item.id)} style={{ background: 'none', border: 'none', color: '#ff6b6b', cursor: 'pointer' }} title="Delete"><Trash2 size={18} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ManageSection;
