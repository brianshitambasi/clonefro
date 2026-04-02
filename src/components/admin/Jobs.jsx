// Similar pattern with fields: title, description, location
// src/components/admin/Jobs.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchJobs, deleteJob } from '../../api/api';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadJobs = async () => {
    try {
      setLoading(true);
      const res = await fetchJobs();
      setJobs(res.data);
    } catch (err) {
      console.error('Error loading jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Delete this job posting?')) {
      try {
        await deleteJob(id);
        loadJobs(); // refresh list after deletion
      } catch (err) {
        console.error('Error deleting job:', err);
        alert('Failed to delete job. Please try again.');
      }
    }
  };

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border text-primary" role="status"></div></div>;
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Jobs</h2>
        <Link to="/admin-dashboard/jobs/add" className="btn btn-primary">
          <i className="bi bi-plus-lg"></i> Add Job
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Location</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">No jobs found.</td>
              </tr>
            ) : (
              jobs.map((job) => (
                <tr key={job._id}>
                  <td>{job.title}</td>
                  <td>{job.description?.substring(0, 100)}...</td>
                  <td>{job.location}</td>
                  <td>{new Date(job.createdAt).toLocaleDateString()}</td>
                  <td>
                    <Link
                      to={`/admin-dashboard/jobs/edit/${job._id}`}
                      className="btn btn-sm btn-outline-primary me-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(job._id)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Jobs;