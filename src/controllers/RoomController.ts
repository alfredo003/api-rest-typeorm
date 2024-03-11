import { Request,Response } from "express"
import { roomRepository } from "../repositories/RoomRepository";
class RoomController
{

    async create(req:Request,res:Response)
    {
        const {name,description} = req.body

        if(!name)
        {
            return res.status(400).json({message:'The name is mandatory'})
        }

        try{
            const newRoom = roomRepository.create({ name, description })

        }catch(error){
            console.log(error);
            return res.status(500).json({message:'Internal Server Error'});
        }
    }

}

export {RoomController}