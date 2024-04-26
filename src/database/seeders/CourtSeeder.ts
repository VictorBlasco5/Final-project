
import { Court } from "../../models/Court";
import { AppDataSource } from "../db";

export const courtSeedDatabase = async () => {
    try {
      await AppDataSource.initialize();
      
      const court1 = Court.create({
        name: "Pabellón Fuente de San Luis",
        direction: "Av. dels Germans Maristes, 16, Quatre Carreres, 46013 València, Valencia",
      });
      await court1.save();
      
      const court2 = Court.create({
        name: "Polideportivo Mislata",
        direction: "Polideportivo Mislata, 46920 Mislata, Valencia",
      });
      await court2.save();

      const court3 = Court.create({
        name: "Polideportivo Municipal de Picanya",
        direction: "Partida de la Martina, s/n, 46210 Picanya, Valencia",
      });
      await court3.save();

      const court4 = Court.create({
        name: "Pistes de bàsquet CAVALIERS",
        direction: "C/ del Bomber Ramon Duart, 21, Quatre Carreres, 46013 València, Valencia",
      });
      await court4.save();

      const court5 = Court.create({
        name: "Pista de basket Villar Palasí",
        direction: "Carrer el Palleter, 9, 46910 Benetússer, Valencia",
      });
      await court5.save();


      console.log('---------------------------');
      console.log('Courts successfully saved');    
      console.log('---------------------------');    
    } catch (error) {
      console.log(error);
    } finally {
      await AppDataSource.destroy()
    }
  }
  