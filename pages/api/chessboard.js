import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient;

const getChessBoard = async (req,res) => {
    const board = await prisma.chessBoard.findFirst();
    prisma.$disconnect;
    return res.status(200).json(board);
}

export default getChessBoard;
