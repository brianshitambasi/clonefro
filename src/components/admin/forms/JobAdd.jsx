import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createJob } from '../../../api/api';

const JobAdd = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', description: '', location: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createJob(formData);
      navigate('/admin-dashboard/jobs');
    } catch (error) {
      console.error('Error creating job', error);
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white">
        <h4>Add New Job</h4>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" name="title" className="form-control" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea name="description" rows="5" className="form-control" value={formData.description} onChange={handleChange} required></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input type="text" name="location" className="form-control" value={formData.location} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="button" onClick={() => navigate('/admin-dashboard/jobs')} className="btn btn-secondary ms-2">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default JobAdd;