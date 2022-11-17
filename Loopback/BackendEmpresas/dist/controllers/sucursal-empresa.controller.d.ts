import { Count, Filter, Where } from '@loopback/repository';
import { Sucursal, Empresa } from '../models';
import { SucursalRepository } from '../repositories';
export declare class SucursalEmpresaController {
    protected sucursalRepository: SucursalRepository;
    constructor(sucursalRepository: SucursalRepository);
    get(id: string, filter?: Filter<Empresa>): Promise<Empresa>;
    create(id: typeof Sucursal.prototype.id_sucursal, empresa: Omit<Empresa, 'id_empresa'>): Promise<Empresa>;
    patch(id: string, empresa: Partial<Empresa>, where?: Where<Empresa>): Promise<Count>;
    delete(id: string, where?: Where<Empresa>): Promise<Count>;
}
