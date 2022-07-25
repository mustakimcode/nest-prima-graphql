
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class LoginUser {
    username: string;
    password: string;
}

export class NewUser {
    username: string;
    name: string;
    address: string;
    phone_number: string;
    password: string;
}

export class SearchUser {
    username?: Nullable<string>;
    address?: Nullable<string>;
    phone_number?: Nullable<string>;
}

export class UpdateUser {
    id: string;
    username: string;
    name: string;
    address: string;
    phone_number: string;
    password: string;
}

export class UserToken {
    token: string;
}

export abstract class IMutation {
    abstract loginUser(input?: Nullable<LoginUser>): UserToken | Promise<UserToken>;

    abstract createUser(input?: Nullable<NewUser>): User | Promise<User>;

    abstract updateUser(input?: Nullable<UpdateUser>): Nullable<User> | Promise<Nullable<User>>;

    abstract deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: string;
    username: string;
    name: string;
    address: string;
    phone_number: string;
    createdAt: string;
}

export abstract class IQuery {
    abstract users(filter?: Nullable<SearchUser>): Nullable<User>[] | Promise<Nullable<User>[]>;
}

type Nullable<T> = T | null;
