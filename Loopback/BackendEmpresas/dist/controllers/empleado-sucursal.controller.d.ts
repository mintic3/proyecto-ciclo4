import { Count, Filter, Where } from '@loopback/repository';
import { Empleado, Sucursal } from '../models';
import { EmpleadoRepository } from '../repositories';
export declare class EmpleadoSucursalController {
    protected empleadoRepository: EmpleadoRepository;
    constructor(empleadoRepository: EmpleadoRepository);
    get(id: string, filter?: Filter<Sucursal>): Promise<Sucursal>;
    create(id: typeof Empleado.prototype.id_empleado, sucursal: Omit<Sucursal, 'id_sucursal'>): Promise<Sucursal>;
    patch(id: string, sucursal: Partial<Sucursal>, where?: Where<Sucursal>): Promise<Count>;
    delete(id: string, where?: Where<Sucursal>): Promise<Count>;
}
