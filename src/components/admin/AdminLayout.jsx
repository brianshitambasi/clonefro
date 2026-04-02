import { Outlet, NavLink } from 'react-router-dom';
import DashboardNavbar from '../DashboardNavbar';

const AdminLayout = () => {
  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: '260px' }}>
        <h4 className="mb-4">Admin Panel</h4>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <NavLink to="/admin-dashboard" className={({ isActive }) => `nav-link text-white ${isActive ? 'active bg-primary' : ''}`}>
              <i className="bi bi-speedometer2 me-2"></i> Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin-dashboard/services" className={({ isActive }) => `nav-link text-white ${isActive ? 'active bg-primary' : ''}`}>
              <i className="bi bi-grid me-2"></i> Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin-dashboard/projects" className={({ isActive }) => `nav-link text-white ${isActive ? 'active bg-primary' : ''}`}>
              <i className="bi bi-folder me-2"></i> Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin-dashboard/jobs" className={({ isActive }) => `nav-link text-white ${isActive ? 'active bg-primary' : ''}`}>
              <i className="bi bi-briefcase me-2"></i> Jobs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin-dashboard/contacts" className={({ isActive }) => `nav-link text-white ${isActive ? 'active bg-primary' : ''}`}>
              <i className="bi bi-envelope me-2"></i> Contacts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin-dashboard/users" className={({ isActive }) => `nav-link text-white ${isActive ? 'active bg-primary' : ''}`}>
              <i className="bi bi-people me-2"></i> Users
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-grow-1 bg-light">
        <DashboardNavbar />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;