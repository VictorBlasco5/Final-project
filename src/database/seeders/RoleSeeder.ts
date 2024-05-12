import { Role } from "../../models/Role";
import { AppDataSource } from "../db";

export const roleSeedDatabase = async () => {
  try {
    await AppDataSource.initialize();
    
    const roleUser = new Role();
    roleUser.id = 1;
    roleUser.name = "user"
    await roleUser.save();

    const roleAdmin = new Role();
    roleAdmin.id = 2;
    roleAdmin.name = "admin"
    await roleAdmin.save();

    console.log('---------------------------------------');
    console.log('Roles successfully saved ');    
    console.log('---------------------------------------');    
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy()
  }
}
