import { Count, Filter, Where } from '@loopback/repository';
import { Cliente, Sucursal } from '../models';
import { ClienteRepository } from '../repositories';
export declare class ClienteSucursalController {
    protected clienteRepository: ClienteRepository;
    constructor(clienteRepository: ClienteRepository);
    find(id: string, filter?: Filter<Sucursal>): Promise<Sucursal[]>;
    create(id: typeof Cliente.prototype.id_cliente, sucursal: Omit<Sucursal, 'id_sucursal'>): Promise<Sucursal>;
    patch(id: string, sucursal: Partial<Sucursal>, where?: Where<Sucursal>): Promise<Count>;
    delete(id: string, where?: Where<Sucursal>): Promise<Count>;
}
