import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Match } from "./Match";


@Entity('user_matches')
export class UserMatch extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(() => User, (user) => user.userMatches)
    @JoinColumn({ name: "user_id" })
    user!: User;
    
    @ManyToOne(() => Match, (match) => match.userMatches)
    @JoinColumn({ name: "match_id" })
    match!: Match;
}