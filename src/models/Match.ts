import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Court } from "./Court";
import { UserMatch } from "./User_match";

@Entity('matches')
export class Match extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'number_players' })
    number_players!: number

    @Column ({ name: 'signed_up', type: 'integer', array: true, default: []})
    signed_up!: number[]

    @Column({ name: 'information' })
    information!:string

    @Column({ name: 'match_date' })
    match_date!:string

    @Column({ name: 'created_at' })
    created_at!:string

    @Column({ name: 'updated_at' })
    updated_at!:string

    @ManyToOne(() => Court, (court) => court.matches)
    @JoinColumn ({ name: "court_id" })
    court!: Court;

    @OneToMany(() => UserMatch, (userMatch) => userMatch.match)
    userMatches!: UserMatch[]


}