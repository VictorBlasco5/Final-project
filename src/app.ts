import express from "express";
import { login, register } from "./controllers/authController";
import { deleteUser, getUserProfile, getUsers, updateProfile } from "./controllers/userController";
import { auth } from "./middlewares/auth";
import { isSuperAdmin } from "./middlewares/isSuperAdmin";
import { createCourt, getCourts } from "./controllers/courtController";


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
app.put('/api/users/profile',auth, updateProfile);
app.delete('/api/users/:id',auth, isSuperAdmin, deleteUser)

//court routes
app.post('/api/courts',auth, isSuperAdmin, createCourt)
app.get('/api/courts',auth, getCourts)