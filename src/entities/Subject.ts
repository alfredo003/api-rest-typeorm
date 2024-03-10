import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Room } from "./Room";

@Entity('subjects')
class Subject
{
    @PrimaryColumn()
    id:number;

    @Column({type:'text'})
    name:string

    @ManyToMany(()=>Room,room=>room.subjects)
    @JoinTable({
        name:'room_subject',
        joinColumn:{
            name:'room_id',
            referencedColumnName:'id'
        },
        inverseJoinColumn:{
            name:'subject_id',
            referencedColumnName:'id'
        }
    })
    rooms: Room[]
}

export {Subject}