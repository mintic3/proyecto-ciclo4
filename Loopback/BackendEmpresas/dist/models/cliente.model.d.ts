import { Entity } from '@loopback/repository';
import { Sucursal } from './sucursal.model';
export declare class Cliente extends Entity {
    id_cliente?: string;
    telefono: number;
    direcion: string;
    email: string;
    nombre_cliente: string;
    apellido_cliente: string;
    n_documento: string;
    tipo_documento: string;
    sucursalId?: string;
    clave: string;
    sucursals: Sucursal[];
    [prop: string]: any;
    constructor(data?: Partial<Cliente>);
}
export interface ClienteRelations {
}
export declare type ClienteWithRelations = Cliente & ClienteRelations;
