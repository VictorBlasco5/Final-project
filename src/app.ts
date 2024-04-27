import express from "express";
import { login, register } from "./controllers/authController";
import { getUserProfile, getUsers } from "./controllers/userController";
import { auth } from "./middlewares/auth";
import { isSuperAdmin } from "./middlewares/isSuperAdmin";


export const app = express();

app.use(express.json());

app.get('/healthy', (req, res) => {
    res.status(200).json(
      {
        success: true,
        message: "Server is healthy"
      }
    );
})

//auth routes
app.post('/api/auth/register', register);
app.post('/api/auth/login', login);

//user routes
app.get('/api/users/profile', auth, getUserProfile);
app.get('/api/users',auth, isSuperAdmin, getUsers);