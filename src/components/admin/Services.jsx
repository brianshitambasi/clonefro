import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchServices, deleteService } from '../../api/api';

const Services = () => {
  const [services, setServices] = useState([]);

  const loadServices = async () => {
    try {
      const res = await fetchServices();
      setServices(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Delete this service?')) {
      await deleteService(id);
      loadServices();
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Services</h2>
        <Link to="/admin-dashboard/services/add" className="btn btn-primary">
          <i className="bi bi-plus-lg"></i> Add Service
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service._id}>
                <td>{service.title}</td>
                <td>{service.description?.substring(0, 100)}...</td>
                <td>{new Date(service.createdAt).toLocaleDateString()}</td>
                <td>
                  <Link to={`/admin-dashboard/services/edit/${service._id}`} className="btn btn-sm btn-outline-primary me-2">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(service._id)} className="btn btn-sm btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;