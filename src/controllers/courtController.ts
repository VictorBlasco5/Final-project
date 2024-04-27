import { Request, Response } from "express";
import { Court } from "../models/Court";


export const createCourt = async (req:Request, res: Response) => {
    try {

        const name = req.body.name;
        const direction = req.body.direction;

        const newCourt = await Court.create({
            name: name,
            direction: direction
        }).save()

        res.status(200).json(
            {
                succes: true,
                message: "Court created",
                data: newCourt
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Cant create court",
            error: error
        })
    }
}

export const getCourts = async (req:Request, res:Response) => {
    try {

        const courts = await Court.find({
            select: {
                id: true,
                name: true,
                direction: true
            }
        })

        res.status(200).json(
            {
                succes: true,
                message: "Court retieved successfully",
                data: courts
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Courts cant be retrieved",
            error: error
        })
    }
}