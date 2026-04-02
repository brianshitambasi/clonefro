// src/components/admin/AdminDashboard.jsx
import { useEffect, useState } from 'react';
import {
  fetchServices,
  fetchProjects,
  fetchJobs,
  fetchContacts,
  fetchUsers
} from '../../api/api';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();

  const [stats, setStats] = useState({
    services: 0,
    projects: 0,
    jobs: 0,
    contacts: 0,
    users: 0
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const [services, projects, jobs, contacts, users] = await Promise.all([
          fetchServices(),
          fetchProjects(),
          fetchJobs(),
          fetchContacts(),
          fetchUsers(),
        ]);

        setStats({
          services: services?.data?.length || 0,
          projects: projects?.data?.length || 0,
          jobs: jobs?.data?.length || 0,
          contacts: contacts?.data?.length || 0,
          users: users?.data?.length || 0,
        });
      } catch (error) {
        console.error('Error loading stats', error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  const cards = [
    { title: 'Services', count: stats.services, icon: 'bi-grid', color: 'primary', link: '/admin-dashboard/services' },
    { title: 'Projects', count: stats.projects, icon: 'bi-folder', color: 'success', link: '/admin-dashboard/projects' },
    { title: 'Jobs', count: stats.jobs, icon: 'bi-briefcase', color: 'warning', link: '/admin-dashboard/jobs' },
    { title: 'Contacts', count: stats.contacts, icon: 'bi-envelope', color: 'info', link: '/admin-dashboard/contacts' },
    { title: 'Users', count: stats.users, icon: 'bi-people', color: 'danger', link: '/admin-dashboard/users' },
  ];

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Dashboard</h2>
        <span className="badge bg-primary fs-6">
          Welcome, {user?.name || 'Admin'}
        </span>
      </div>

      <div className="row g-4">
        {cards.map((card) => (
          <div key={card.title} className="col-md-4 col-lg-3">
            <div className={`card border-0 shadow-sm h-100 text-${card.color}`}>
              <div className="card-body position-relative">

                <i className={`bi ${card.icon} fs-1 float-end`}></i>

                <h5 className="card-title">{card.title}</h5>

                <p className="card-text display-6 fw-bold">
                  {card.count}
                </p>

                {/* ✅ FIXED ACCESSIBLE LINK */}
                <a
                  href={card.link}
                  className="stretched-link"
                  aria-label={`Open ${card.title}`}
                >
                  <span className="visually-hidden">
                    Open {card.title}
                  </span>
                </a>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;