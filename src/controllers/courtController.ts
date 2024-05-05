import { Request, Response } from "express";
import { Court } from "../models/Court";


export const createCourt = async (req: Request, res: Response) => {
    try {

        const name = req.body.name;
        const direction = req.body.direction;

        const courtExist = await Court.findOneBy({
            name: name
        })

        if (courtExist) {
            return res.status(400).json({
                success: false,
                message: "Court already exist"
            })
        }

        const newCourt = await Court.create({
            name: name,
            direction: direction
        }).save()

        res.status(200).json(
            {
                success: true,
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

export const getCourts = async (req: Request, res: Response) => {
    try {

        const courts = await Court.find({
        })

        res.status(200).json(
            {
                success: true,
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

export const updateCourt = async (req: Request, res: Response) => {
    try {

        const courtId = req.params.id;
        const name = req.body.name;
        const direction = req.body.direction;

        //validacion
        const court = await Court.findOneBy({
            id: parseInt(courtId)
        })

        if (!court) {
            return res.status(404).json({
                success: false,
                message: "Court not found"
            })
        }

        //actualizar db
        const courtUpdate = await Court.update(
            {
                id: parseInt(courtId)
            },
            {
                name: name,
                direction: direction
            }
        )


        res.status(200).json(
            {
                success: true,
                message: "Court updated successfully",
                data: courtUpdate
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Courts cant be update",
            error: error
        })
    }
}

export const deleteCourt = async (req: Request, res: Response) => {
    try {

        const courtId = req.params.id

        const courtDelete: any = await Court.findOneBy({
            id: parseInt(courtId)
        })


        if (!courtDelete) {
            return res.status(404).json({
                success: false,
                message: "Court not found"
            })
        }

        const courtRemove = await Court.remove(courtDelete)

        res.status(200).json(
            {
                success: true,
                message: "Court deleted successfully",
                data: courtRemove
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Courts cant be delete",
            error: error
        })
    }
}