// main logic of route
import * as usersRepository from "./users.repository.ts";

export const create = async (data: any) => {

    // validation

    // hash password

    // create user

    return usersRepository.create(data);

};
export const getAll = async () => {

    // validation

    // hash password

    // create user

    return usersRepository.getAll();

};
export const update = async ( data: any) => {

    // validation

    // hash password

    // create user

    return usersRepository.update(data.id, data);

};
export const deleteUser = async (data : any) => {

    // validation

    // hash password

    // create user

    return usersRepository.deleteUser(data.id);

};

