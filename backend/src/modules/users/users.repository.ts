// database

import { prisma } from "../../config/prisma.ts";

export const create = (data: any) => {
    return prisma.user.create({
        data,
    });
};
export const getAll = () => {
    return prisma.user.findMany()
};
export const update = (id: number, data: any) => {
    return prisma.user.update({
        where: {
            id: id
        },
        data
    });
};
export const deleteUser = (id: number) => {
    return prisma.user.delete({
        where: {
            id: id
        }
    });
};

export const findByEmail = (email: string) => {
    return prisma.user.findUnique({
        where: {
            email,
        },
    });
};
export const findById = (id: number) => {
    return prisma.user.findUnique({
        where: {
            id,
        },
    });
};