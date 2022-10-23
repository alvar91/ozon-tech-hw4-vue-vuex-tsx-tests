export interface User {
    id: string,
    firstName: string,
    middleName: string,
    lastName: string,
    login: string,
    city: string,
    ticket: string,
    citizenship: string,
    age: string,
    gender: string,
    registeredDate: string,
    employmentDate: string,
    FPStatus: string,
    accountStatus: string,
    applicationStatus: string,
}

export type MainUserInfo = Pick<User, "firstName" | "middleName" | "lastName">;

export type UserKeys = keyof User;
