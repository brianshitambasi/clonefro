import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers, deleteUser } from '../../api/api';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetchUsers();
      setUsers(res.data);
    };
    load();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Delete this user?')) {
      await deleteUser(id);
      setUsers(users.filter(u => u._id !== id));
    }
  };

  return (
    <div>
      <h2 className="mb-4">Users</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td>
                  <Link to={`/admin-dashboard/users/edit/${user._id}`} className="btn btn-sm btn-outline-primary me-2">Edit</Link>
                  <button onClick={() => handleDelete(user._id)} className="btn btn-sm btn-outline-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;