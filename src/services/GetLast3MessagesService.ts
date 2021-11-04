import prismaClient from "../prisma";

class GetLast3MessageService{
    async execute(){
        const messages = await prismaClient.message.findMany({
            take: 3,
            orderBy: {
                created_at: "desc"
            },
            include: {
                user: true
            }
        });

    //select * from message order by created_at desc limit 3;
    return messages;
    }
}
export {GetLast3MessageService}