const TaskList = ({ tasks = [], onEdit, onDelete }) => {
  if (!Array.isArray(tasks)) {
    console.error("Expected tasks to be an array, got:", tasks);
    return <p className="text-red-500">Error loading tasks</p>;
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div key={task._id} className="border p-4 rounded shadow-sm bg-white">
          <h3 className="text-xl font-semibold">{task.title}</h3>
          <p className="text-gray-700">{task.description}</p>
          <p className="text-sm text-gray-500">Status: {task.status}</p>

          {task.documents?.length > 0 && (
            <div className="mt-2 space-y-1">
              {task.documents.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.filepath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline block"
                >
                  📎 {doc.filename}
                </a>
              ))}
            </div>
          )}

          <div className="flex gap-2 mt-2">
            <button onClick={() => onEdit(task)} className="text-blue-600 hover:underline">
              Edit
            </button>
            <button onClick={() => onDelete(task._id)} className="text-red-600 hover:underline">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
