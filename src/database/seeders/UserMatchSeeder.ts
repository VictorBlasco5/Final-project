import { UserMatch } from "../../models/User_match";
import { AppDataSource } from "../db";


export const userMatchSeedDatabase = async () => {

    try {
        await AppDataSource.initialize();
        
        const court1 = UserMatch.create({
            user: {id: 1},
            match: {id: 4}
        });
        await court1.save();

        const court2 = UserMatch.create({
            user: {id: 5},
            match: {id: 3}
        });
        await court2.save();

        const court3 = UserMatch.create({
            user: {id: 4},
            match: {id: 1}
        });
        await court3.save();

        const court4 = UserMatch.create({
            user: {id: 3},
            match: {id: 5}
        });
        await court4.save();

        const court5 = UserMatch.create({
            user: {id: 3},
            match: {id: 2}
        });
        await court5.save();
        
  
        console.log('---------------------------');
        console.log('User_matches successfully saved');    
        console.log('---------------------------');    
      } catch (error) {
        console.log(error);
      } finally {
        await AppDataSource.destroy()
      }
}