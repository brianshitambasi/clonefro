import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUserById, updateUser } from '../../../api/api'; // adjust relative path if needed

const UserEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', role: 'user', password: '' });

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetchUserById(id);
        setFormData({
          name: res.data.name,
          email: res.data.email,
          role: res.data.role,
          password: '',
        });
      } catch (err) {
        console.error(err);
      }
    };
    loadUser();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateData = { ...formData };
      if (!updateData.password) delete updateData.password;
      await updateUser(id, updateData);
      navigate('/admin-dashboard/users');
    } catch (error) {
      console.error('Error updating user', error);
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white">
        <h4>Edit User</h4>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <select name="role" className="form-select" value={formData.role} onChange={handleChange}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">New Password (leave blank to keep current)</label>
            <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
          <button type="button" onClick={() => navigate('/admin-dashboard/users')} className="btn btn-secondary ms-2">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default UserEdit;