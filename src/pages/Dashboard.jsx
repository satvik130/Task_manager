import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const cards = [
    {
      title: "Your Tasks",
      description: "View and manage your tasks here.",
      path: "/tasks",
    },
    {
      title: "Your Profile",
      description: "Manage your personal information.",
      path: "/profile",
    },
    {
      title: "Activity",
      description: "Check your recent activity.",
      path: "/activity", // You can create this page later
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">
        Welcome back{user?.name ? `, ${user.name}` : ""}!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.path)}
            className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg cursor-pointer hover:bg-gray-700 transition duration-200"
          >
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-300">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
