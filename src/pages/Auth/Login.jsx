import { useState } from 'react';
import { loginUser } from '../../api/auth';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);

      // Save token
      localStorage.setItem('token', res.data.token);

    
      dispatch(
        loginSuccess({
          user: {
            _id: res.data.user._id,
            name: res.data.user.name,
            email: res.data.user.email,
            role: res.data.user.role,
          },
          token: res.data.token,
        })
      );

    
      if (res.data.user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      alert(err?.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="mb-3 p-2 border border-blue-300 w-full rounded"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="mb-3 p-2 border border-blue-300 w-full rounded"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
