import { Request, Response } from "express";
import { Court } from "../models/Court";
import { FavoriteCourt } from "../models/Favorite_court";
import { User } from "../models/User";


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

export const favoriteCourts = async (req: Request, res: Response) => {
    try {
        const userId = req.tokenData.userId;
        const courtId = parseInt(req.params.id);

        const court = await Court.findOne({ where: { id: courtId } });
        if (!court) {
            return res.status(404).json({
                success: false,
                message: "Court not found"
            });
        }
        
        let favoriteCourt = await FavoriteCourt.findOne({
            where: {
                user: { id: userId },
                court: { id: courtId }
            }
        });

        if (!favoriteCourt) {
            
            favoriteCourt = new FavoriteCourt();
            favoriteCourt.user = { id: userId } as User;
            favoriteCourt.court = { id: courtId } as Court;
            favoriteCourt.name = court.name;
        } else {
            await favoriteCourt.remove();
            return res.status(200).json({
                success: true,
                message: "Removed from favorites successfully",
                data: favoriteCourt
            });
        }

        await favoriteCourt.save();

        return res.status(200).json({
            success: true,
            message:  "Added to favorites successfully",
            data: favoriteCourt
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            success: false,
            message: "Couldn't update favorites",
            error: error
        });
    }
};
