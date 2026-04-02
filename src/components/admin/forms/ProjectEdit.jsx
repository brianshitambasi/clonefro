import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProjectById, updateProject } from '../../../api/api';

const ProjectEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', description: '', technologies: '' });

  useEffect(() => {
    const loadProject = async () => {
      try {
        const res = await fetchProjectById(id);
        const proj = res.data;
        setFormData({
          title: proj.title,
          description: proj.description,
          technologies: proj.technologies?.join(', ') || '',
        });
      } catch (err) {
        console.error(err);
      }
    };
    loadProject();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const technologiesArray = formData.technologies.split(',').map(t => t.trim()).filter(t => t);
    try {
      await updateProject(id, { ...formData, technologies: technologiesArray });
      navigate('/admin-dashboard/projects');
    } catch (error) {
      console.error('Error updating project', error);
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white">
        <h4>Edit Project</h4>
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
            <label className="form-label">Technologies (comma separated)</label>
            <input type="text" name="technologies" className="form-control" value={formData.technologies} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
          <button type="button" onClick={() => navigate('/admin-dashboard/projects')} className="btn btn-secondary ms-2">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default ProjectEdit;