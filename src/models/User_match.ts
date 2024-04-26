import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Match } from "./Match";


@Entity('users')
export class UserMatch extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(() => User, (user) => user.userMatches)
    user!: User;
    
    @ManyToOne(() => Match, (match) => match.userMatches)
    match!: Match;
}