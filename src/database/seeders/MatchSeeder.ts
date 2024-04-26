import { Match } from "../../models/Match";
import { AppDataSource } from "../db";

export const matchSeedDatabase = async () => {
    try {
        await AppDataSource.initialize();

        const match1 = new Match();
        match1.number_players = "6";
        match1.information = "Partido de amigos 1";
        match1.match_date = "2024-05-20 12:30:00";
        match1.court.id = 1;
        match1.userMatches[0].id = 1;
        await match1.save();

        const match2 = new Match();
        match2.number_players = "4";
        match2.information = "Partido de amigos 2";
        match2.match_date = "2024-05-21 16:45:00";
        match2.court.id = 2;
        match2.userMatches[1].id = 4;
        await match2.save();

        const match3 = new Match();
        match3.number_players = "6";
        match3.information = "Partido de amigos 3";
        match3.match_date = "2024-05-22 17:30:00";
        match3.court.id = 3;
        match3.userMatches[2].id = 5;
        await match3.save();

        const match4 = new Match();
        match4.number_players = "6";
        match4.information = "Partido de amigos 4";
        match4.match_date = "2024-05-23 18:00:00";
        match4.court.id = 4;
        match4.userMatches[3].id = 3;
        await match4.save();

        const match5 = new Match();
        match5.number_players = "4";
        match5.information = "Partido de amigos 5";
        match5.match_date = "2024-05-24 10:00:00";
        match5.court.id = 5;
        match5.user.id = 2;
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

