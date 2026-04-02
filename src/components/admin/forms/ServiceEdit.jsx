import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchServiceById, updateService } from '../../../api/api';

const ServiceEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', description: '' });

  useEffect(() => {
    const loadService = async () => {
      try {
        const res = await fetchServiceById(id);
        setFormData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    loadService();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateService(id, formData);
      navigate('/admin-dashboard/services');
    } catch (error) {
      console.error('Error updating service', error);
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white">
        <h4>Edit Service</h4>
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
          <button type="submit" className="btn btn-primary">Update</button>
          <button type="button" onClick={() => navigate('/admin-dashboard/services')} className="btn btn-secondary ms-2">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default ServiceEdit;