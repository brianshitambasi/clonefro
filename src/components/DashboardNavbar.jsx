// src/components/DashboardNavbar.jsx
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const DashboardNavbar = () => {
  let user = null;
  let logout = () => {};
  
  try {
    const auth = useAuth();
    user = auth.user;
    logout = auth.logout;
  } catch (error) {
    console.warn('Auth not available in DashboardNavbar');
  }
  
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <span className="navbar-brand">MJ&Roberts Admin</span>
      <div className="ms-auto">
        <span className="text-white me-3">Hello, {user?.name || 'Admin'}</span>
        <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;