import { FavoriteCourt } from "../../models/Favorite_court";
import { AppDataSource } from "../db";


export const favoriteCourtSeedDatabase = async () => {

    try {
        await AppDataSource.initialize();
        
        const favorite1 = FavoriteCourt.create({
            favorite: "Pistes de bàsquet CAVALIERS",
            user: {id: 1},
            court: {id: 4}
        });
        await favorite1.save();
        
        const favorite2 = FavoriteCourt.create({
            favorite: "Pabellón Fuente de San Luis",
            user: {id: 4},
            court: {id: 1}
        });
        await favorite2.save();
        
        const favorite3 = FavoriteCourt.create({
            favorite: "Pista de basket Villar Palasí",
            user: {id: 2},
            court: {id: 5}
        });
        await favorite3.save();
        
        const favorite4 = FavoriteCourt.create({
            favorite: "Pistes de bàsquet CAVALIERS",
            user: {id: 2},
            court: {id: 4}
        });
        await favorite4.save();
        
        const favorite5 = FavoriteCourt.create({
            favorite: "Polideportivo Mislata",
            user: {id: 5},
            court: {id: 2}
        });
        await favorite5.save();
        
  
        console.log('---------------------------');
        console.log('Favorite_courts successfully saved');    
        console.log('---------------------------');    
      } catch (error) {
        console.log(error);
      } finally {
        await AppDataSource.destroy()
      }
}