import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at!: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at!: Date;

    @OneToMany(() => Match, (match) => match.court)
    matches!: Match[]

    @OneToMany(() => FavoriteCourt, (favoriteCourt) => favoriteCourt.court)
    favoriteCourts!: FavoriteCourt[]
}