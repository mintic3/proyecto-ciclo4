import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoconexionDataSource } from '../datasources';
import { Cliente, ClienteRelations, Sucursal } from '../models';
import { SucursalRepository } from './sucursal.repository';
export declare class ClienteRepository extends DefaultCrudRepository<Cliente, typeof Cliente.prototype.id_cliente, ClienteRelations> {
    protected sucursalRepositoryGetter: Getter<SucursalRepository>;
    readonly sucursals: HasManyRepositoryFactory<Sucursal, typeof Cliente.prototype.id_cliente>;
    constructor(dataSource: MongoconexionDataSource, sucursalRepositoryGetter: Getter<SucursalRepository>);
}
