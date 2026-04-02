// Mock data for development
const mockServices = [
  { _id: '1', title: 'IT Consulting', description: 'Expert IT consulting services', createdAt: new Date() },
  { _id: '2', title: 'Cloud Migration', description: 'AWS cloud migration services', createdAt: new Date() }
];

const mockProjects = [
  { _id: '1', title: 'E-commerce Platform', description: 'Built with React and Node.js', technologies: ['React', 'Node.js'], createdAt: new Date() }
];

const mockJobs = [
  { _id: '1', title: 'Frontend Developer', description: 'React developer needed', location: 'Remote', createdAt: new Date() }
];

const mockContacts = [
  { _id: '1', name: 'John Doe', email: 'john@example.com', message: 'Need consultation', createdAt: new Date() }
];

const mockUsers = [
  { _id: '1', name: 'Admin User', email: 'admin@example.com', role: 'admin', createdAt: new Date() }
];

// Mock API functions
export const fetchServices = () => Promise.resolve({ data: mockServices });
export const fetchServiceById = (id) => Promise.resolve({ data: mockServices.find(s => s._id === id) });
export const createService = (service) => Promise.resolve({ data: { ...service, _id: Date.now().toString(), createdAt: new Date() } });
export const updateService = (id, service) => Promise.resolve({ data: service });
export const deleteService = (id) => Promise.resolve({ data: { message: 'Deleted' } });

export const fetchProjects = () => Promise.resolve({ data: mockProjects });
export const fetchProjectById = (id) => Promise.resolve({ data: mockProjects.find(p => p._id === id) });
export const createProject = (project) => Promise.resolve({ data: { ...project, _id: Date.now().toString(), createdAt: new Date() } });
export const updateProject = (id, project) => Promise.resolve({ data: project });
export const deleteProject = (id) => Promise.resolve({ data: { message: 'Deleted' } });

export const fetchJobs = () => Promise.resolve({ data: mockJobs });
export const fetchJobById = (id) => Promise.resolve({ data: mockJobs.find(j => j._id === id) });
export const createJob = (job) => Promise.resolve({ data: { ...job, _id: Date.now().toString(), createdAt: new Date() } });
export const updateJob = (id, job) => Promise.resolve({ data: job });
export const deleteJob = (id) => Promise.resolve({ data: { message: 'Deleted' } });

export const fetchContacts = () => Promise.resolve({ data: mockContacts });
export const fetchContactById = (id) => Promise.resolve({ data: mockContacts.find(c => c._id === id) });
export const deleteContact = (id) => Promise.resolve({ data: { message: 'Deleted' } });

export const fetchUsers = () => Promise.resolve({ data: mockUsers });
export const fetchUserById = (id) => Promise.resolve({ data: mockUsers.find(u => u._id === id) });
export const updateUser = (id, user) => Promise.resolve({ data: user });
export const deleteUser = (id) => Promise.resolve({ data: { message: 'Deleted' } });

export const loginUser = (credentials) => {
  if (credentials.email === 'admin@example.com' && credentials.password === 'password') {
    return Promise.resolve({
      data: {
        token: 'mock-token-123',
        user: { _id: '1', name: 'Admin User', email: 'admin@example.com', role: 'admin' }
      }
    });
  }
  return Promise.reject({ response: { data: { error: 'Invalid credentials' } } });
};

export const registerUser = (userData) => {
  return Promise.resolve({
    data: {
      message: 'User created successfully',
      user: { ...userData, _id: Date.now().toString() }
    }
  });
};