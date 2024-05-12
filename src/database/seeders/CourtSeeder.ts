
import { Court } from "../../models/Court";
import { AppDataSource } from "../db";

export const courtSeedDatabase = async () => {
    try {
      await AppDataSource.initialize();
      
      const court1 = Court.create({
        name: "Jardín del Turia",
        direction: "L'Olivereta, 46018 Valencia",
        URL_maps: "https://maps.app.goo.gl/4LUHsj8wfSVpGqY19"
      });
      await court1.save();
      
      const court2 = Court.create({
        name: "Polideportivo Mislata",
        direction: "Polideportivo Mislata, 46920 Mislata, Valencia",
        URL_maps: "https://maps.app.goo.gl/fFgY5SsC3eHXQNgH7"
      });
      await court2.save();

      const court3 = Court.create({
        name: "Polideportivo Municipal de Picanya",
        direction: "Partida de la Martina, s/n, 46210 Picanya, Valencia",
        URL_maps: "https://maps.app.goo.gl/axLL3vgJ8z3Jj1ZKA"
      });
      await court3.save();

      const court4 = Court.create({
        name: "Cavaliers",
        direction: "C/ del Bomber Ramon Duart, 21, Quatre Carreres, 46013 València, Valencia",
        URL_maps: "https://maps.app.goo.gl/i2EEYGPQpWHv9pXq8"
      });
      await court4.save();

      const court5 = Court.create({
        name: "Villar Palasí",
        direction: "Carrer el Palleter, 9, 46910 Benetússer, Valencia",
        URL_maps: "https://maps.app.goo.gl/2nKB2wjVhvF7RMm17"
      });
      await court5.save();

      const court6 = Court.create({
        name: "Pistons",
        direction: "C/ de Pius XI, 20, Patraix, 46014 València, Valencia",
        URL_maps: "https://maps.app.goo.gl/Hpp5uucnwopcebF77"
      });
      await court6.save();

      const court7 = Court.create({
        name: "Campanar",
        direction: "Carrer d'Eduardo Soler y Pérez, 5, Campanar, 46035 Valencia",
        URL_maps: "https://maps.app.goo.gl/9RsixeJpgL3dnGfd8"
      });
      await court7.save();

      const court8 = Court.create({
        name: "Malvarrosa",
        direction: "Poblados Marítimos, 46011 Valencia",
        URL_maps: "https://maps.app.goo.gl/QwHR6CpZeCuPGRY37"
      });
      await court8.save();

      const court9 = Court.create({
        name: "La Saïdia",
        direction: "C/ de Fra Pere Vives, 190, La Saïdia, 46009 València, Valencia",
        URL_maps: "https://maps.app.goo.gl/Bm7pMa7T5PjKEPLn9"
      });
      await court9.save();

      const court10 = Court.create({
        name: "Tarongers",
        direction: "Tarongers-Ernest Lluch, 46022, Valencia",
        URL_maps: "https://maps.app.goo.gl/MUApMy873uQfhLs77"
      });
      await court10.save();

      console.log('---------------------------');
      console.log('Courts successfully saved');    
      console.log('---------------------------');    
    } catch (error) {
      console.log(error);
    } finally {
      await AppDataSource.destroy()
    }
  }
  