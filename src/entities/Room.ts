import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { Video } from "./Video";
import { Subject } from "./Subject";

 @Entity('rooms')
class Room
{
    @PrimaryColumn()
    id:number

    @Column({type:'text'})
    name:string

    @Column({type:'text',nullable:true})
    description:string
    
    @OneToMany(()=>Video,video=>video.room)
    videos: Video[]

    @ManyToMany(()=>Subject,subjects=>subjects.rooms)
    subjects: Subject[]

}

export {Room};