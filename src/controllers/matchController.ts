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

export const deleteMatch = async (req: Request, res: Response) => {
    try {
        const { userId, roleName } = req.tokenData;
        console.log(`userId: ${userId}, roleName: ${roleName}`);
        const matchId = req.params.id
        const admin = roleName === 'admin';
        console.log(`admin: ${admin}`); // Log admin status
        const matchDelete: any = await Match.findOneBy({
            id: parseInt(matchId)
        })

        console.log(`matchDelete: ${JSON.stringify(matchDelete)}`); // Log matchDelete object
        if (!matchDelete) {
            return res.status(404).json({
                success: false,
                message: "Match not found"
            })
        }

        if (userId !== matchDelete.userId && !admin) {
            console.log('Not authorized to delete match');
            return res.status(403).json({
                success: false,
                message: "You are not authorized to delete this match"
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

export const assistanceMatch = async (req: Request, res: Response) => {
    try {

        const { userId } = req.tokenData;
        const matchId = req.params.id;

        const match = await Match.findOneBy({
            id: parseInt(matchId)
        });

        if (!match) {
            return res.status(404).json({
                success: false,
                message: "Match not found"
            })
        }
       
        const signedUpArray = match.signed_up || [];  // Obtengo el array actual del partido

        if (signedUpArray.includes(userId)) {
            return res.status(400).json({
                success: false,
                message: "User already signed up for this match"
            });
        }

        signedUpArray.push(userId); 
        const signedUpJSON = JSON.stringify(signedUpArray);  // Convierto el array a JSON 
        match.signed_up = signedUpJSON as any   // Actualizo en DB
        await match.save();

        res.status(200).json(
            {
                success: true,
                message: "Signed up successfully for match",
                data: match
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Cant sign up for match",
            error: error
        })
    }
}