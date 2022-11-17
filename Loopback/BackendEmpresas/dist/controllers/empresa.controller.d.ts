import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Empresa } from '../models';
import { EmpresaRepository } from '../repositories';
export declare class EmpresaController {
    empresaRepository: EmpresaRepository;
    constructor(empresaRepository: EmpresaRepository);
    create(empresa: Omit<Empresa, 'id'>): Promise<Empresa>;
    count(where?: Where<Empresa>): Promise<Count>;
    find(filter?: Filter<Empresa>): Promise<Empresa[]>;
    updateAll(empresa: Empresa, where?: Where<Empresa>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Empresa>): Promise<Empresa>;
    updateById(id: string, empresa: Empresa): Promise<void>;
    replaceById(id: string, empresa: Empresa): Promise<void>;
    deleteById(id: string): Promise<void>;
}
