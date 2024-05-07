import { Request, Response } from 'express';
import bcrypt from "bcrypt";
import { User } from '../models/User';
import jwt from "jsonwebtoken";

//CREAR USUARIO
export const register = async (req: Request, res: Response) => {
    try {

        const { name, nickname, email, password, favorite_position, presentation, image } = req.body;

        //validacion contraseña
        if (password.length < 5 || password.length > 12) {
            return res.status(400).json({
                success: false,
                message: "Password must be between 5 and 12 characters"
            })
        }

        //validacion email
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Format email invalid"
            })
        }

        //validar si el email ya está registrado
        const emailUser = await User.findOne({
            where: { email: email }
        })

        if (emailUser) {
            return res.status(400).json({
                success: false,
                message: "You are already registered"
            })
        }

        const passwordEncrypted = bcrypt.hashSync(password, 8);

        const newUser = await User.create({
            name: name,
            nickname: nickname,
            email: email,
            password: passwordEncrypted,
            favorite_position: favorite_position,
            presentation: presentation,
            image: image,
            role: {
                id: 1
            }
        }).save()

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: newUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User cant be register",
            error: error
        })
    }
}

//LOGIN
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        //validacion
        if (!email || !password) {
            return res.status(404).json({
                success: false,
                message: "Email and password are needed"
            })
        }

        const user = await User.findOne({
            where: {
                email: email
            },
            relations: ['role'],
            select: ['id', 'name', 'nickname', 'email', 'password', 'role'],

        })

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Email or password invalid"
            })
        }

        const isValidPassword = bcrypt.compareSync(password, user.password)

        if (!isValidPassword) {
            return res.status(400).json({
                success: false,
                message: "Email or password invalid",
            })
        }

        //crear token
        const token = jwt.sign(
            {
                userId: user.id,
                roleName: user.role.name,
                name: user.name,
            },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "24h"
            }
        )

        res.status(201).json({
            success: true,
            message: "User logged",
            token: token

        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "User cant be logged",
            error: error
        })
    }
}