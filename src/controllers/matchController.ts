import { Request, Response } from "express";
import { Match } from "../models/Match";


export const getMatches = async (req: Request, res: Response) => {
    try {

        const matches = await Match.find({
            relations: ["court"]
        });

        res.status(200).json(
            {
                success: true,
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

export const createMatch = async (req: Request, res: Response) => {
    try {
        const { number_players, information, match_date, court_id } = req.body;

        const newMatch = new Match();
        newMatch.number_players = number_players;
        newMatch.information = information;
        newMatch.match_date = match_date;
        newMatch.court = court_id;
        await newMatch.save();

        res.status(200).json(
            {
                success: true,
                message: "Match created",
                data: newMatch
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Cant create match",
            error: error
        })
    }
}

export const deleteMatch = async (req:Request, res:Response) => {
    try{

        const matchId = req.params.id

        const matchDelete: any = await Match.findOneBy({
            id: parseInt(matchId)
        })


        if (!matchDelete) {
            return res.status(404).json({
                success: false,
                message: "Match not found"
            })
        }

        const matchRemove = await Match.remove(matchDelete)

        res.status(200).json(
            {
                success: true,
                message: "Match deleted successfully",
                data: matchRemove
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Match cant be delete",
            error: error
        })
    }
}