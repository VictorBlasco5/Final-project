import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Court } from "./Court";
import { User } from "./User";
import { UserMatch } from "./User_match";

@Entity('matches')
export class Match extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'number_players' })
    number_players!:string

    @Column({ name: 'information' })
    information!:string

    @Column({ name: 'match_date' })
    match_date!:string

    @ManyToOne(() => Court, (court) => court.match)
    @JoinColumn ({ name: "court_id" })
    court!: Court;

    @OneToMany(() => UserMatch, (userMatch) => userMatch.match)
    userMatches!: UserMatch[]

}