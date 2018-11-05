import { DonationStatus } from "./enums/data.enum";

export interface DonationModel {
    id: number;
    personId: string;
    recicladorRecolecto: string;
    materiales: [MaterialLocalModel],
    gotasRedimir: number;
    calificacionVolumen: number;
    calificacionEstado: number;
    status: DonationStatus

    materials: [MaterialLocalModel]
}

export interface MaterialLocalModel {
    materialType: string;
    quantity: number;
    unities: string;
    materialState: string;
    materialDescription: string;
    id?: string;
    creationDate?: string;
}

export interface MaterialModel {
    id?: string;
    personId: string;
    tipoId: string;
    unidadId: string;
    estado: string;
    addressRecoleccionId: string;
    descripcion: string;
    cantidad: number;
    status?: string;
}

export interface UnitiesModel {
    id: string;
    descripcion: string;
    gotasRecompensa: number;
}

export interface MaterialTypeModel {
    id: string;
    descripcion: string;
    factorMaterial: number;
    unidades: [UnitiesModel];
}
