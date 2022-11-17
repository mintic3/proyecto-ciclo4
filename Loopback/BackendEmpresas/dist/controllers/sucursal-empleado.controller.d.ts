import { Count, Filter, Where } from '@loopback/repository';
import { Sucursal, Empleado } from '../models';
import { SucursalRepository } from '../repositories';
export declare class SucursalEmpleadoController {
    protected sucursalRepository: SucursalRepository;
    constructor(sucursalRepository: SucursalRepository);
    find(id: string, filter?: Filter<Empleado>): Promise<Empleado[]>;
    create(id: typeof Sucursal.prototype.id_sucursal, empleado: Omit<Empleado, 'id_empleado'>): Promise<Empleado>;
    patch(id: string, empleado: Partial<Empleado>, where?: Where<Empleado>): Promise<Count>;
    delete(id: string, where?: Where<Empleado>): Promise<Count>;
}
