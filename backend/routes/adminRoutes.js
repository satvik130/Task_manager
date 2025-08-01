const express = require("express");
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/adminController");
const { protect } = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

const router = express.Router();

// ✅ Apply middleware to all routes
router.use(protect, isAdmin);

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
