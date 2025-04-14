// src/components/UserManagement.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [editId, setEditId] = useState(null);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/users');
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Create user
  const createUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/users', formData);
      setUsers([...users, res.data]);
      setFormData({ name: '', email: '' });
    } catch (err) {
      console.error(err);
    }
  };

  // Update user
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:5000/users/${editId}`, formData);
      setUsers(users.map(user => user.id === editId ? res.data : user));
      setFormData({ name: '', email: '' });
      setEditId(null);
    } catch (err) {
      console.error(err);
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Handle edit
  const handleEdit = (user) => {
    setFormData({ name: user.name, email: user.email });
    setEditId(user.id);
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">User Management</h2>
      
      {/* User Form */}
      <form onSubmit={editId ? updateUser : createUser} className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">{editId ? 'Edit User' : 'Add User'}</h3>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          {editId ? 'Update User' : 'Add User'}
        </button>
        {editId && (
          <button
            type="button"
            onClick={() => {
              setFormData({ name: '', email: '' });
              setEditId(null);
            }}
            className="ml-2 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </form>

      {/* Users List */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Users</h3>
        {users.length === 0 ? (
          <p>No users found</p>
        ) : (
          <ul className="space-y-2">
            {users.map(user => (
              <li key={user.id} className="flex justify-between items-center p-3 bg-white rounded shadow">
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-gray-600">{user.email}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserManagement;