import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Sucursal } from '../models';
import { SucursalRepository } from '../repositories';
export declare class SucursalController {
    sucursalRepository: SucursalRepository;
    constructor(sucursalRepository: SucursalRepository);
    create(sucursal: Omit<Sucursal, 'id'>): Promise<Sucursal>;
    count(where?: Where<Sucursal>): Promise<Count>;
    find(filter?: Filter<Sucursal>): Promise<Sucursal[]>;
    updateAll(sucursal: Sucursal, where?: Where<Sucursal>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Sucursal>): Promise<Sucursal>;
    updateById(id: string, sucursal: Sucursal): Promise<void>;
    replaceById(id: string, sucursal: Sucursal): Promise<void>;
    deleteById(id: string): Promise<void>;
}
