import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjects, deleteProject } from '../../api/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const loadProjects = async () => {
    try {
      const res = await fetchProjects();
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Delete this project?')) {
      await deleteProject(id);
      loadProjects();
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Projects</h2>
        <Link to="/admin-dashboard/projects/add" className="btn btn-primary">
          <i className="bi bi-plus-lg"></i> Add Project
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Technologies</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj) => (
              <tr key={proj._id}>
                <td>{proj.title}</td>
                <td>{proj.description?.substring(0, 100)}...</td>
                <td>{proj.technologies?.join(', ')}</td>
                <td>
                  <Link to={`/admin-dashboard/projects/edit/${proj._id}`} className="btn btn-sm btn-outline-primary me-2">Edit</Link>
                  <button onClick={() => handleDelete(proj._id)} className="btn btn-sm btn-outline-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;