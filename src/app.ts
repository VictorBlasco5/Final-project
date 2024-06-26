import express from "express";
import { login, register } from "./controllers/authController";
import { deleteUser, getUserProfile, getUsers, updateProfile } from "./controllers/userController";
import { auth } from "./middlewares/auth";
import { isSuperAdmin } from "./middlewares/isSuperAdmin";
import { createCourt, deleteCourt, favoriteCourts, getCourts, getMyFavoriteCourts, updateCourt } from "./controllers/courtController";
import cors from "cors";
import { assistanceMatch, createMatch, deleteMatch, getMatches, getMatchesAssistance, getMatchesByCourt, getMyMatches, updateMatch } from "./controllers/matchController";

export const app = express();
app.use(cors())

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
app.put('/api/courts/:id',auth, isSuperAdmin, updateCourt)
app.delete('/api/courts/:id',auth, isSuperAdmin, deleteCourt)
app.put('/api/courts/fav/:id', auth, favoriteCourts)
app.get('/api/courts/fav',auth, getMyFavoriteCourts)

//match routes
app.get('/api/matches',auth, getMatches)
app.get('/api/matches/assistance',auth, getMatchesAssistance)
app.post('/api/matches',auth, createMatch)
app.delete('/api/matches/:id',auth, deleteMatch)
app.put('/api/matches/assistance/:id',auth, assistanceMatch)
app.get('/api/matches/courts/:id',auth, getMatchesByCourt)
app.get('/api/matches/own',auth, getMyMatches)
app.put('/api/matches/:id', auth, updateMatch)