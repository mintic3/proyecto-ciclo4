import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoconexionDataSource } from '../datasources';
import { Empresa, EmpresaRelations, Sucursal } from '../models';
import { SucursalRepository } from './sucursal.repository';
export declare class EmpresaRepository extends DefaultCrudRepository<Empresa, typeof Empresa.prototype.id_empresa, EmpresaRelations> {
    protected sucursalRepositoryGetter: Getter<SucursalRepository>;
    readonly sucursals: HasManyRepositoryFactory<Sucursal, typeof Empresa.prototype.id_empresa>;
    constructor(dataSource: MongoconexionDataSource, sucursalRepositoryGetter: Getter<SucursalRepository>);
}
