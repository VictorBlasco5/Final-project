import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./Role";
import { UserMatch } from "./User_match";
import { FavoriteCourt } from "./Favorite_court";

@Entity('users')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({name: 'name'})
    first_name!: string

    @Column({name: 'email'})
    email!: string

    @Column({name: 'password', select: false})
    password_hash!: string

    @Column({name: 'favorite_position', nullable: true})
    favorite_position!: string

    @Column({name: 'presentation', nullable: true})
    presentation!: string

    @Column({name: 'image', nullable: true})
    image!: string

    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn ({ name: "role_id" })
    role!: Role;

    @OneToMany(() => UserMatch, (userMatch) => userMatch.user)
    userMatches!: UserMatch[]

    @OneToMany(() => FavoriteCourt, (favoriteCourt) => favoriteCourt.user)
    favoriteCourts!: FavoriteCourt[]
}