import { Count, Filter, Where } from '@loopback/repository';
import { Sucursal, Cliente } from '../models';
import { SucursalRepository } from '../repositories';
export declare class SucursalClienteController {
    protected sucursalRepository: SucursalRepository;
    constructor(sucursalRepository: SucursalRepository);
    find(id: string, filter?: Filter<Cliente>): Promise<Cliente[]>;
    create(id: typeof Sucursal.prototype.id_sucursal, cliente: Omit<Cliente, 'id_cliente'>): Promise<Cliente>;
    patch(id: string, cliente: Partial<Cliente>, where?: Where<Cliente>): Promise<Count>;
    delete(id: string, where?: Where<Cliente>): Promise<Count>;
}
