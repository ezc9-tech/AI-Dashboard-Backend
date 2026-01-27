import { prisma } from "../../config/db"

export const getUserById = async (userId: string) => {
    return prisma.user.findUnique({
        where: {id: userId},
        select: {
            id: true,
            email: true,
            name: true,
            role: true,
            createdAt: true
        }})
}

export const updateUserById = async (userId: string, data: {name: string, email: string}) => {
    return prisma.user.update({
        where: {id: userId},
        data, 
        select: {
                id: true,
                email: true,
                name: true,
                role: true,
                createdAt: true
            }})
}