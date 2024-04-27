import { Request, Response } from "express";
import { User } from "../models/User";


//VER TODOS LOS USUARIOS
export const getUsers = async (req: Request, res: Response) => {
    try {
        const limit = Number(req.query.limit) || 100; // elijo el limite que yo quiera y sino por defecto me dará 10
        const page = Number(req.query.page) || 1; //elijo empezar por la pagina que yo quiera y sino por defecto me dará la 1
        const skip = (page - 1) * limit as number // determinar por qué página quiero empezar

        if (limit > 100) {
            return res.status(404).json(
                {
                    success: false,
                    message: "you have exceeded the limit"
                }
            )
        }

        const users = await User.find(
            {
                select: {
                    id: true,
                    name: true,
                    nickname: true,
                    email: true,
                    favorite_position: true,
                    presentation: true,
                    image: true,
                },
                take: limit, //paginación para que me traiga 10 usuarios al hacer la petición.
                skip: skip
            }
        )

        res.status(200).json({
            success: true,
            message: "users retrieved successfully",
            data: users
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "It is not possible to recover the users",
            error: error
        })
    }
}


//VER MI PERFIL
export const getUserProfile = async (req: Request, res: Response) => {
    try {
        const userId = req.tokenData.userId;

        const userProfile = await User.findOneBy(
            {
                id: userId
            }
        )

        if (!userProfile) {
            return res.status(400).json({
                success: false,
                message: "User not found ",
            })
        }

        res.status(200).json({
            success: true,
            message: "User retrieved",
            data: userProfile
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User cant be retrieved",
            error: error
        })
    }
}