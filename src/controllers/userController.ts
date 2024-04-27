import {Request, Response} from "express";
import { User } from "../models/User";


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