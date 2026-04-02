import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchContactById } from '../../../api/api';

const ContactView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchContactById(id);
        setContact(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    load();
  }, [id]);

  if (!contact) return <div>Loading...</div>;

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white">
        <h4>Contact Message</h4>
      </div>
      <div className="card-body">
        <p><strong>Name:</strong> {contact.name}</p>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Date:</strong> {new Date(contact.createdAt).toLocaleString()}</p>
        <p><strong>Message:</strong></p>
        <p className="border p-3 bg-light">{contact.message}</p>
        <button onClick={() => navigate('/admin-dashboard/contacts')} className="btn btn-secondary">Back</button>
      </div>
    </div>
  );
};

export default ContactView;