export interface RegisterData {
    cedula: string;
    nombre: string;
    email: string;
    telefono: string;
    address: addressModel;
    ciudad: string;
    rol: string;
    gotas: number;
    politicas: boolean;
    username: string;
    password: string;
}

export interface UserModel {
    cedula?: string;
    nombre: string;
    email: string;
    telefono: string;
    ciudad: string;
    rol: string;
    gotas: number;
    politicas: boolean;
    username: string;
    fecha?: string;
    personId: string;
    address?: [addressModel];
}

export interface daysModel {
    monday?: string;
    tuesday?: string;
    wendsday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
}

export interface addressModel {
    id?: string;
    address: string;
    days: [daysModel];
    festivos?: boolean;
    personId?: string
}

export interface RegisterResponseModel {
    cedula: string;
    nombre: string;
    email: string;
    telefono: string;
    ciudad: string;
    rol: string;
    gotas: number;
    politicas: boolean;
    username: string;
    fecha?: string;
    personId: string;
    tokenId: string;
    address?: [addressModel];
}
