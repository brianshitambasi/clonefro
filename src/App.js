// src/App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import NotAuthorized from './components/NotAuthorized';
import NotFound from './components/NotFound';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './context/ProtectedRoute';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './components/admin/AdminDashboard';
import Services from './components/admin/Services';
import ServiceAdd from './components/admin/forms/ServiceAdd';
import ServiceEdit from './components/admin/forms/ServiceEdit';
import Projects from './components/admin/Projects';
import ProjectAdd from './components/admin/forms/ProjectAdd';
import ProjectEdit from './components/admin/forms/ProjectEdit';
import Jobs from './components/admin/Jobs';
import JobAdd from './components/admin/forms/JobAdd';
import JobEdit from './components/admin/forms/JobEdit';
import Contacts from './components/admin/Contacts';
import ContactView from './components/admin/forms/ContactView';
import Users from './components/admin/Users';
import UserEdit from './components/admin/forms/UserEdit';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<AboutUs />} />

          {/* Admin routes (protected) */}
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="services" element={<Services />} />
            <Route path="services/add" element={<ServiceAdd />} />
            <Route path="services/edit/:id" element={<ServiceEdit />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/add" element={<ProjectAdd />} />
            <Route path="projects/edit/:id" element={<ProjectEdit />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="jobs/add" element={<JobAdd />} />
            <Route path="jobs/edit/:id" element={<JobEdit />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="contacts/:id" element={<ContactView />} />
            <Route path="users" element={<Users />} />
            <Route path="users/edit/:id" element={<UserEdit />} />
          </Route>

          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/not-authorized" element={<NotAuthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;