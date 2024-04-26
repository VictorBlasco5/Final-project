import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Match } from "./Match";
import { FavoriteCourt } from "./Favorite_court";


@Entity('courts')
export class Court extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'name' })
    name!:string

    @Column({ name: 'direction' })
    direction!:string

    @OneToMany(() => Match, (match) => match.court)
    match!: Match[]

    @OneToMany(() => FavoriteCourt, (favoriteCourt) => favoriteCourt.court)
    favoriteCourt!: FavoriteCourt[]
}