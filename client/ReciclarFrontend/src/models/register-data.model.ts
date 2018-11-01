export interface RegisterData {
    cedula: string;
    nombre: string;
    email: string;
    telefono: string;
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
    id: string;
    userId?: string;
}
