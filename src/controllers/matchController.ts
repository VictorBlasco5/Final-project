import { Request, Response } from "express";
import { Match } from "../models/Match";


export const getMatches = async (req: Request, res: Response) => {
    try {

        const matches = await Match.find({

            select: {
                id: true,
                number_players: true,
                information: true,
                match_date: true,
            }
        })

        res.status(200).json(
            {
                succes: true,
                message: "Matches retieved successfully",
                data: matches,
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Matches cant be retrieved",
            error: error
        })
    }
}