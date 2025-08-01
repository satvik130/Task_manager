const express = require("express");
const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/AuthController"); // ✅ Ensure the path is correct

const { protect } = require("../middlewares/auth"); // ✅ Use correct middleware name

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getProfile); // ✅ This is your protected route

module.exports = router;
