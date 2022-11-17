import { Entity } from '@loopback/repository';
import { Sucursal } from './sucursal.model';
export declare class Empresa extends Entity {
    id_empresa?: string;
    nit: number;
    nombre: string;
    telefono: number;
    direcion: string;
    email: string;
    CIIU: string;
    sucursals: Sucursal[];
    sucursalId?: string;
    [prop: string]: any;
    constructor(data?: Partial<Empresa>);
}
export interface EmpresaRelations {
}
export declare type EmpresaWithRelations = Empresa & EmpresaRelations;
