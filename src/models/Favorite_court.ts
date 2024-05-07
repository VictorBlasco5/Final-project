import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Court } from "./Court";

@Entity('favorite_courts')
export class FavoriteCourt extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({name: 'name'})
    name!: string

    @ManyToOne(() => User, (user) => user.favoriteCourts)
    @JoinColumn ({ name: "user_id" })
    user!: User;

    @ManyToOne(() => Court, (court) => court.favoriteCourts)
    @JoinColumn ({ name: "court_id" })
    court!: Court;

}