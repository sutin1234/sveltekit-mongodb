
export interface IUserResponse {
    status: number;
    body: IUser[] | string;
}

export interface IUser {
    _id: any;
    email: string;
    fullName: string;
    created: string;
}