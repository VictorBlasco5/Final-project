import { UserMatch } from "../../models/User_match";
import { AppDataSource } from "../db";


export const userMatchSeedDatabase = async () => {

    try {
        await AppDataSource.initialize();
        
        const unserMatch1 = UserMatch.create({
            user: {id: 1},
            match: {id: 1}
        });
        await unserMatch1.save();

        const unserMatch2 = UserMatch.create({
            user: {id: 3},
            match: {id: 2}
        });
        await unserMatch2.save();

        const unserMatch3 = UserMatch.create({
            user: {id: 3},
            match: {id: 3}
        });
        await unserMatch3.save();
        
        const unserMatch4 = UserMatch.create({
            user: {id: 4},
            match: {id: 4}
        });
        await unserMatch4.save();

        const unserMatch5 = UserMatch.create({
            user: {id: 5},
            match: {id: 5}
        });
        await unserMatch5.save();

        const unserMatch6 = UserMatch.create({
            user: {id: 6},
            match: {id: 6}
        });
        await unserMatch6.save();

        const unserMatch7 = UserMatch.create({
            user: {id: 7},
            match: {id: 7}
        });
        await unserMatch7.save();

        const unserMatch8 = UserMatch.create({
            user: {id: 8},
            match: {id: 8}
        });
        await unserMatch8.save();

        const unserMatch9 = UserMatch.create({
            user: {id: 9},
            match: {id: 9}
        });
        await unserMatch9.save();

        const unserMatch10 = UserMatch.create({
            user: {id: 10},
            match: {id: 10}
        });
        await unserMatch10.save();

        const unserMatch11 = UserMatch.create({
            user: {id: 11},
            match: {id: 11}
        });
        await unserMatch11.save();

        const unserMatch12 = UserMatch.create({
            user: {id: 12},
            match: {id: 12}
        });
        await unserMatch12.save();

        const unserMatch13 = UserMatch.create({
            user: {id: 13},
            match: {id: 13}
        });
        await unserMatch13.save();

        const unserMatch14 = UserMatch.create({
            user: {id: 14},
            match: {id: 14}
        });
        await unserMatch14.save();

        const unserMatch15 = UserMatch.create({
            user: {id: 15},
            match: {id: 15}
        });
        await unserMatch15.save();

        console.log('---------------------------');
        console.log('User_matches successfully saved');    
        console.log('---------------------------');    
      } catch (error) {
        console.log(error);
      } finally {
        await AppDataSource.destroy()
      }
}