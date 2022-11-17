import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Cliente, Credenciales } from '../models';
import { ClienteRepository } from '../repositories';
import { AutenticacionService } from '../services';
export declare class ClienteController {
    clienteRepository: ClienteRepository;
    serviceAutenticacion: AutenticacionService;
    constructor(clienteRepository: ClienteRepository, serviceAutenticacion: AutenticacionService);
    identificarCliente(credenciales: Credenciales): Promise<{
        datos: {
            nombre: string;
            correo: string;
            id: string | undefined;
        };
        tk: void;
    }>;
    create(cliente: Omit<Cliente, 'id'>): Promise<Cliente>;
    count(where?: Where<Cliente>): Promise<Count>;
    find(filter?: Filter<Cliente>): Promise<Cliente[]>;
    updateAll(cliente: Cliente, where?: Where<Cliente>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Cliente>): Promise<Cliente>;
    updateById(id: string, cliente: Cliente): Promise<void>;
    replaceById(id: string, cliente: Cliente): Promise<void>;
    deleteById(id: string): Promise<void>;
}
