import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) return <p className="text-white">No user data available.</p>;

  return (
    <div className="max-w-xl mx-auto bg-gray-800 text-white p-6 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
      <div className="space-y-3">
        <div>
          <p className="text-gray-400">Name</p>
          <p className="text-lg">{user.name}</p>
        </div>
        <div>
          <p className="text-gray-400">Email</p>
          <p className="text-lg">{user.email}</p>
        </div>
        <div>
          <p className="text-gray-400">Role</p>
          <p className="text-lg capitalize">{user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
