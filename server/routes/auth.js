// import express from "express";
// import { register, login, getUserData } from "../controllers/auth.js";
// import authMiddleware from "../middlewares/authMiddleware.js"; // Import the authMiddleware

// const router = express.Router();

// router.post("/register", register);
// router.post("/login", login);
// router.get("/user", authMiddleware, getUserData); // Protect the route with authMiddleware

// export default router;


import express from 'express';
import { register, login, getUserData } from '../controllers/auth.js';
import authMiddleware from '../middlewares/authMiddleware.js';  // Import the auth middleware

const router = express.Router();

// Register and login routes (open to everyone)
router.post('/register', register);
router.post('/login', login);

// Protected route - fetch user data (requires valid JWT)
router.get('/user', authMiddleware, getUserData);

export default router;
