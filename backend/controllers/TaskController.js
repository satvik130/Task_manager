const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({ ...req.body, assignedTo: req.user.id });
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ message: "Task creation failed", error: err.message });
  }
};


exports.getTasks = async (req, res) => {
  try {
    const { status, priority, search, sortBy, page = 1, limit = 10 } = req.query;

    const query = { assignedTo: req.user.id };  // 👈 Correct field

    if (status) query.status = status;
    if (priority) query.priority = priority;
    if (search) query.title = { $regex: search, $options: "i" };

    let sort = {};
    if (sortBy === "dueDate") sort.dueDate = 1;
    else if (sortBy === "priority") sort.priority = -1;

    const tasks = await Task.find(query)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ message: "Fetching tasks failed", error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, assignedTo: req.user.id },  // 👈 Use assignedTo here
      req.body,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found or unauthorized" });
    }

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ message: "Task update failed", error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      assignedTo: req.user.id   // 👈 Match by assignedTo
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found or unauthorized" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Task deletion failed", error: err.message });
  }
};

