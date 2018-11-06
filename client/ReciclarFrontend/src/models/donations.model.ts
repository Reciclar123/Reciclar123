import { DonationStatus } from "./enums/data.enum";
import { interceptingHandler } from "@angular/common/http/src/module";

export interface DeliveryMaterials {
    personId: string;
    materiales: Array<string>;
}

export interface DeliveryMaterialsRp {
    personId: string;
    recicladorRecolecto: string;
    materiales: Array<MaterialModel>;
    status: string;
    fecha: string;
    id: string;
}

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
