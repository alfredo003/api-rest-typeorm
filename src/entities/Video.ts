import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Room } from "./Room";

@Entity('videos')
export class Video
{
    @PrimaryColumn()
    id:number

    @Column({type:'text'})
    title:string

    @Column({type:'text',nullable:true})
    description:string

    @Column({type:'text'})
    url:string

    @ManyToOne(()=>Room,room=>room.videos)
    @JoinColumn({name:'room_id'})
    room: Room
}

 