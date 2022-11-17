import { Entity } from '@loopback/repository';
import { Sucursal } from './sucursal.model';
export declare class Empleado extends Entity {
    id_empleado?: string;
    salario: string;
    nombre: string;
    apellido: string;
    tipo_documento: string;
    directivo: boolean;
    n_documento: string;
    sucursalId?: string;
    sucursal: Sucursal;
    [prop: string]: any;
    constructor(data?: Partial<Empleado>);
}
export interface EmpleadoRelations {
}
export declare type EmpleadoWithRelations = Empleado & EmpleadoRelations;
