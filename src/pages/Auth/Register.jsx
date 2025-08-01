import { useState } from 'react';
import { registerUser } from '../../api/auth';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(form);
      localStorage.setItem("token", res.data.token);
      dispatch(loginSuccess(res.data));
      navigate('/dashboard');
    } catch (err) {
      alert(err?.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#d1c4e9]">
      <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="mb-4 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-violet-500 text-gray-900 placeholder-gray-500"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="mb-4 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-violet-500 text-gray-900 placeholder-gray-500"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="mb-4 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-violet-500 text-gray-900 placeholder-gray-500"
          value={form.password}
          onChange={handleChange}
          required
        />
        
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="mb-4 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-violet-500 text-gray-900"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold w-full py-3 rounded-md transition">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
