import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchContacts, deleteContact } from '../../api/api';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetchContacts();
      setContacts(res.data);
    };
    load();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Delete this contact message?')) {
      await deleteContact(id);
      setContacts(contacts.filter(c => c._id !== id));
    }
  };

  return (
    <div>
      <h2 className="mb-4">Contact Messages</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c._id}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.message.substring(0, 80)}...</td>
                <td>{new Date(c.createdAt).toLocaleDateString()}</td>
                <td>
                  <Link to={`/admin-dashboard/contacts/${c._id}`} className="btn btn-sm btn-outline-info me-2">View</Link>
                  <button onClick={() => handleDelete(c._id)} className="btn btn-sm btn-outline-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;