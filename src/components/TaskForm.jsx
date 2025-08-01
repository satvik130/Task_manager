import { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, initialData, onCancel }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "pending",
    documents: [],
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        ...initialData,
        documents: [], // Reset file input
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "documents") {
      setForm({ ...form, documents: Array.from(files) }); // Allow multiple
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", form.title);
    data.append("description", form.description);
    data.append("status", form.status);
    form.documents.forEach((file) => data.append("documents", file)); // Multiple files

    onSubmit(data);
    setForm({ title: "", description: "", status: "pending", documents: [] });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="border p-2 w-full"
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <input
        type="file"
        name="documents"
        multiple
        onChange={handleChange}
        className="border p-2 w-full"
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
      />
      <div className="flex gap-2">
        <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
          {initialData ? "Update" : "Add"}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="bg-gray-400 px-4 py-1 rounded text-white">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
