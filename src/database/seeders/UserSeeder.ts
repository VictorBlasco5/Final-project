import { User } from "../../models/User";
import { AppDataSource } from "../db";

export const userSeedDatabase = async () => {
    try {
      await AppDataSource.initialize();
      
      const user1 = User.create({
        name: "User",
        nickname: "User",
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
        nickname: "Admin",
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
        nickname: "Laura",
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
        nickname: "Víctor",
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
        nickname: "David",
        email: "david@david.com",
        password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
        favorite_position: "Alero",
        presentation: "Hola me llamo David y me gusta jugar a baloncesto 5",
        image: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg",
        role: {id: 1}
      });
      await user5.save();

      const user6 = User.create({
        name: "Carlos",
        nickname: "Carlos",
        email: "carlos@carlos.com",
        password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
        favorite_position: "Base",
        presentation: "Hola me llamo Carlos y me gusta jugar a baloncesto 6",
        image: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg",
        role: {id: 1}
      });
      await user6.save();

      const user7 = User.create({
        name: "Javier",
        nickname: "Javier",
        email: "javier@javier.com",
        password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
        favorite_position: "Base",
        presentation: "Hola me llamo Javier y me gusta jugar a baloncesto 7",
        image: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg",
        role: {id: 1}
      });
      await user7.save();

      const user8 = User.create({
        name: "Marta",
        nickname: "Marta",
        email: "marta@marta.com",
        password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
        favorite_position: "Alero",
        presentation: "Hola me llamo Marta y me gusta jugar a baloncesto 8",
        image: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg",
        role: {id: 1}
      });
      await user8.save();

      const user9 = User.create({
        name: "Sara",
        nickname: "Sara",
        email: "sara@sara.com",
        password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
        favorite_position: "Base",
        presentation: "Hola me llamo Sara y me gusta jugar a baloncesto 9",
        image: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg",
        role: {id: 1}
      });
      await user9.save();

      const user10 = User.create({
        name: "Pablo",
        nickname: "Pablo",
        email: "pablo@pablo.com",
        password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
        favorite_position: "Pívot",
        presentation: "Hola me llamo Pablo y me gusta jugar a baloncesto 10",
        image: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg",
        role: {id: 1}
      });
      await user10.save();

      const user11 = User.create({
        name: "María",
        nickname: "María",
        email: "maria@maria.com",
        password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
        favorite_position: "Base",
        presentation: "Hola me llamo María y me gusta jugar a baloncesto 11",
        image: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg",
        role: {id: 1}
      });
      await user11.save();

      const user12 = User.create({
        name: "Ana",
        nickname: "Ana",
        email: "ana@ana.com",
        password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
        favorite_position: "Alero",
        presentation: "Hola me llamo Ana y me gusta jugar a baloncesto 12",
        image: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg",
        role: {id: 1}
      });
      await user12.save();

      const user13 = User.create({
        name: "Lucía",
        nickname: "Lucía",
        email: "lucia@lucia.com",
        password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
        favorite_position: "Pivot",
        presentation: "Hola me llamo Lucía y me gusta jugar a baloncesto 13",
        image: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg",
        role: {id: 1}
      });
      await user13.save();

      const user14 = User.create({
        name: "Miguel",
        nickname: "Miguel",
        email: "miguel@miguel.com",
        password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
        favorite_position: "Base",
        presentation: "Hola me llamo Miguel y me gusta jugar a baloncesto 14",
        image: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg",
        role: {id: 1}
      });
      await user14.save();

      const user15 = User.create({
        name: "Jorge",
        nickname: "Jorge",
        email: "jorge@jorge.com",
        password: "$2b$08$ZEsDerEChlJlGCodM7tIYO1Jtp6uXfajfZNByeNQ1rUBnlI3ovIMm",
        favorite_position: "Pivot",
        presentation: "Hola me llamo Jorge y me gusta jugar a baloncesto 15",
        image: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg",
        role: {id: 1}
      });
      await user15.save(); 
      
      console.log('---------------------------');
      console.log('Users successfully saved');    
      console.log('---------------------------');    
    } catch (error) {
      console.log(error);
    } finally {
      await AppDataSource.destroy()
    }
  }
  
