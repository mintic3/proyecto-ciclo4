import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Empleado } from '../models';
import { EmpleadoRepository } from '../repositories';
export declare class EmpleadoController {
    empleadoRepository: EmpleadoRepository;
    constructor(empleadoRepository: EmpleadoRepository);
    create(empleado: Omit<Empleado, 'id'>): Promise<Empleado>;
    count(where?: Where<Empleado>): Promise<Count>;
    find(filter?: Filter<Empleado>): Promise<Empleado[]>;
    updateAll(empleado: Empleado, where?: Where<Empleado>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Empleado>): Promise<Empleado>;
    updateById(id: string, empleado: Empleado): Promise<void>;
    replaceById(id: string, empleado: Empleado): Promise<void>;
    deleteById(id: string): Promise<void>;
}
