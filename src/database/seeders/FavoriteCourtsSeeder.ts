import { FavoriteCourt } from "../../models/Favorite_court";
import { AppDataSource } from "../db";


export const favoriteCourtSeedDatabase = async () => {

    try {
        await AppDataSource.initialize();
        
        const favorite1 = FavoriteCourt.create({
            name: "Cavaliers",
            user: {id: 1},
            court: {id: 4}
        });
        await favorite1.save();
        
        const favorite2 = FavoriteCourt.create({
            name: "Tarongers",
            user: {id: 4},
            court: {id: 1}
        });
        await favorite2.save();
        
        const favorite3 = FavoriteCourt.create({
            name: "Villar Palasí",
            user: {id: 2},
            court: {id: 5}
        });
        await favorite3.save();
        
        const favorite4 = FavoriteCourt.create({
            name: "Malvarrosa",
            user: {id: 2},
            court: {id: 4}
        });
        await favorite4.save();
        
        const favorite5 = FavoriteCourt.create({
            name: "Polideportivo Mislata",
            user: {id: 5},
            court: {id: 2}
        });
        await favorite5.save();

        const favorite6 = FavoriteCourt.create({
            name: "Campanar",
            user: {id: 3},
            court: {id: 1}
        });
        await favorite6.save();

        const favorite7 = FavoriteCourt.create({
            name: "Jardín del Turia",
            user: {id: 1},
            court: {id: 5}
        });
        await favorite7.save();

        const favorite8 = FavoriteCourt.create({
            name: "Polideportivo Mislata",
            user: {id: 3},
            court: {id: 2}
        });
        await favorite8.save();

        const favorite9 = FavoriteCourt.create({
            name: "Pistons",
            user: {id: 5},
            court: {id: 1}
        });
        await favorite9.save();

        const favorite10 = FavoriteCourt.create({
            name: "La Saïdia",
            user: {id: 4},
            court: {id: 5}
        });
        await favorite10.save();

        const favorite11 = FavoriteCourt.create({ 
            name: "Villar Palasí",
            user: {id: 1},
            court: {id: 5}
        });
        await favorite11.save();

        const favorite12 = FavoriteCourt.create({
            name: "Polideportivo Mislata",
            user: {id: 2},
            court: {id: 2}
        });
        await favorite12.save();

        const favorite13 = FavoriteCourt.create({
            name: "Polideportivo Municipal de Picanya",
            user: {id: 3},
            court: {id: 1}
        });
        await favorite13.save();

        const favorite14 = FavoriteCourt.create({
            name: "Jardín del Turia",
            user: {id: 4},
            court: {id: 5}
        });
        await favorite14.save();

        const favorite15 = FavoriteCourt.create({
            name: "Malvarrosa",
            user: {id: 5},
            court: {id: 2}
        });
        await favorite15.save();

        console.log('---------------------------');
        console.log('Favorite_courts successfully saved');    
        console.log('---------------------------');    
      } catch (error) {
        console.log(error);
      } finally {
        await AppDataSource.destroy()
      }
}