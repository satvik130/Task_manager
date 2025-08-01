import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/slices/authSlice';

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">Task Manager</Link>
      </div>
      <div className="space-x-4 flex items-center">
        {!user ? (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <Link to="/tasks" className="hover:underline">
              Tasks
            </Link>
            <Link to="/profile" className="hover:underline">
              Profile
            </Link>

           
            {user?.role === "admin" && (
              <Link
                to="/admin"
                className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
              >
                Admin Panel
              </Link>
            )}

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
