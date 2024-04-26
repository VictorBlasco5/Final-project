import { User } from "../../models/User";
import { AppDataSource } from "../db";

export const userSeedDatabase = async () => {
    try {
      await AppDataSource.initialize();
      
      const user1 = User.create({
        name: "User",
        email: "user@user.com",
        password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
        favorite_position: "Pívot",
        presentation: "Hola me llamo User y me gusta jugar a baloncesto 1",
        image: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg",
        role: {id: 1}
      });
      await user1.save();

      const user2 = User.create({
        name: "Admin",
        email: "admin@admin.com",
        password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
        favorite_position: "Alero",
        presentation: "Hola me llamo Admin y me gusta jugar a baloncesto 2",
        image: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg",
        role: {id: 2}
      });
      await user2.save();

      const user3 = User.create({
        name: "Laura",
        email: "laura@laura.com",
        password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
        favorite_position: "Base",
        presentation: "Hola me llamo Laura y me gusta jugar a baloncesto 3",
        image: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg",
        role: {id: 1}
      });
      await user3.save();

      const user4 = User.create({
        name: "Víctor",
        email: "victor@victor.com",
        password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
        favorite_position: "Pívot",
        presentation: "Hola me llamo Víctor y me gusta jugar a baloncesto 4",
        image: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg",
        role: {id: 1}
      });
      await user4.save();

      const user5 = User.create({
        name: "David",
        email: "david@david.com",
        password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
        favorite_position: "Alero",
        presentation: "Hola me llamo David y me gusta jugar a baloncesto 5",
        image: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg",
        role: {id: 1}
      });
      await user5.save();

      
      
      console.log('---------------------------');
      console.log('Users successfully saved');    
      console.log('---------------------------');    
    } catch (error) {
      console.log(error);
    } finally {
      await AppDataSource.destroy()
    }
  }
  
