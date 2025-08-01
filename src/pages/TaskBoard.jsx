import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllTasks,
  createTask as createTaskAPI,
  updateTask as updateTaskAPI,
  deleteTask as deleteTaskAPI,
} from "../api/task";
import {
  setTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../redux/slices/taskSlice";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import toast from "react-hot-toast";

const TaskBoard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const [filteredTasks, setFilteredTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(false);

  const loadTasks = async () => {
    setLoading(true);
    try {
      const res = await getAllTasks();
      dispatch(setTasks(res.data.tasks));
    } catch (err) {
      toast.error("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  const filterTasks = () => {
    if (statusFilter === "all") {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter((task) => task.status === statusFilter));
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    filterTasks();
  }, [statusFilter, tasks]);

  const handleAddOrUpdate = async (data) => {
    try {
      if (editingTask) {
        const res = await updateTaskAPI(editingTask._id, data);
        dispatch(updateTask(res.data));
        toast.success("Task updated");
        setEditingTask(null);
      } else {
        const res = await createTaskAPI(data);
        dispatch(addTask(res.data));
        toast.success("Task created");
      }
    } catch (err) {
      toast.error("Error saving task");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTaskAPI(id);
      dispatch(deleteTask(id));
      toast.success("Task deleted");
    } catch (err) {
      toast.error("Error deleting task");
    }
  };

  return (
    <div className="bg-gradient-to-tr from-sky-100 via-purple-100 to-rose-100 rounded-2xl shadow-lg p-6 text-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold text-purple-700">Task Board</h2>
        <select
          className="border px-3 py-1 rounded shadow-sm bg-white text-sm text-gray-700"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <TaskForm
        onSubmit={handleAddOrUpdate}
        initialData={editingTask}
        onCancel={() => setEditingTask(null)}
      />

      {loading ? (
        <p className="text-center text-gray-500 mt-4">Loading tasks...</p>
      ) : filteredTasks.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No tasks found.</p>
      ) : (
        <TaskList
          tasks={filteredTasks}
          onEdit={setEditingTask}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default TaskBoard;
