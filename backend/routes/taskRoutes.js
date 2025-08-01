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


router.post("/", protect, upload.array("documents", 5), createTask);


router.get("/", protect, getTasks);


router.put("/:id", protect, upload.array("documents", 5), updateTask);


router.delete("/:id", protect, deleteTask);

module.exports = router;
