// src/pages/Home.jsx
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-4xl font-bold mb-4">Welcome to Task Manager</h1>
        <p className="text-lg text-gray-600 mb-6">
          Organize your tasks efficiently and manage your productivity.
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
