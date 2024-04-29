import { Court } from "../../models/Court";
import { Match } from "../../models/Match";
import { AppDataSource } from "../db";

export const matchSeedDatabase = async () => {
    try {
        await AppDataSource.initialize();

        const match1 = new Match();
        match1.number_players = "6";
        match1.information = "Partido de amigos 1";
        match1.match_date = "2024-05-20 12:30:00";
        const court1 = new Court()
        court1.id = 1
        match1.court = court1;
        await match1.save();

        const match2 = new Match();
        match2.number_players = "4";
        match2.information = "Partido de amigos 2";
        match2.match_date = "2024-05-21 16:45:00";
        const court2 = new Court()
        court2.id = 2
        match2.court = court2;
        await match2.save();

        const match3 = new Match();
        match3.number_players = "6";
        match3.information = "Partido de amigos 3";
        match3.match_date = "2024-05-22 17:30:00";
        const court3 = new Court()
        court3.id = 3
        match3.court = court3;

        await match3.save();

        const match4 = new Match();
        match4.number_players = "6";
        match4.information = "Partido de amigos 4";
        match4.match_date = "2024-05-23 18:00:00";
        const court4 = new Court()
        court4.id = 4
        match4.court = court4;
        await match4.save();

        const match5 = new Match();
        match5.number_players = "4";
        match5.information = "Partido de amigos 5";
        match5.match_date = "2024-05-24 10:00:00";
        const court5 = new Court()
        court5.id = 5
        match5.court = court5;
        await match5.save();

        console.log('---------------------------');
        console.log('Matches successfully saved');
        console.log('---------------------------');
    } catch (error) {
        console.log(error);
    } finally {
        await AppDataSource.destroy()
    }
}

