import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

export default function handler(req,res){
    
    prisma.chessBoard.create(rows:[""])
}