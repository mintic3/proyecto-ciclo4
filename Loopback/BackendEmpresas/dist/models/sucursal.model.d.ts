import { Entity } from '@loopback/repository';
import { Empresa } from './empresa.model';
import { Empleado } from './empleado.model';
import { Cliente } from './cliente.model';
export declare class Sucursal extends Entity {
    id_sucursal?: string;
    direcion: string;
    telefono: number;
    adminstrador: string;
    password: string;
    user: string;
    empresaId?: string;
    empresa: Empresa;
    empleados: Empleado[];
    empleadoId?: string;
    clientes: Cliente[];
    clienteId?: string;
    [prop: string]: any;
    constructor(data?: Partial<Sucursal>);
}
export interface SucursalRelations {
}
export declare type SucursalWithRelations = Sucursal & SucursalRelations;
