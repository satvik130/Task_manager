const express = require("express");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/TaskController");

const { protect } = require("../middlewares/auth");
const upload = require("../utils/multer");

const router = express.Router();

// @route   POST /api/tasks/
// @desc    Create a new task
// @access  Private
router.post("/", protect, upload.array("documents", 5), createTask);

// @route   GET /api/tasks/
// @desc    Get all tasks of logged in user
// @access  Private
router.get("/", protect, getTasks);

// @route   PUT /api/tasks/:id
// @desc    Update a task
// @access  Private
router.put("/:id", protect, upload.array("documents", 5), updateTask);

// @route   DELETE /api/tasks/:id
// @desc    Delete a task
// @access  Private
router.delete("/:id", protect, deleteTask);

module.exports = router;
