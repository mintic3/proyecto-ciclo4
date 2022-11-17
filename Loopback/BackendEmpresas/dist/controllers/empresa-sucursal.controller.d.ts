import { Count, Filter, Where } from '@loopback/repository';
import { Empresa, Sucursal } from '../models';
import { EmpresaRepository } from '../repositories';
export declare class EmpresaSucursalController {
    protected empresaRepository: EmpresaRepository;
    constructor(empresaRepository: EmpresaRepository);
    find(id: string, filter?: Filter<Sucursal>): Promise<Sucursal[]>;
    create(id: typeof Empresa.prototype.id_empresa, sucursal: Omit<Sucursal, 'id_sucursal'>): Promise<Sucursal>;
    patch(id: string, sucursal: Partial<Sucursal>, where?: Where<Sucursal>): Promise<Count>;
    delete(id: string, where?: Where<Sucursal>): Promise<Count>;
}
