import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory } from '@loopback/repository';
import { MongoconexionDataSource } from '../datasources';
import { Empleado, EmpleadoRelations, Sucursal } from '../models';
import { SucursalRepository } from './sucursal.repository';
export declare class EmpleadoRepository extends DefaultCrudRepository<Empleado, typeof Empleado.prototype.id_empleado, EmpleadoRelations> {
    protected sucursalRepositoryGetter: Getter<SucursalRepository>;
    readonly sucursal: HasOneRepositoryFactory<Sucursal, typeof Empleado.prototype.id_empleado>;
    constructor(dataSource: MongoconexionDataSource, sucursalRepositoryGetter: Getter<SucursalRepository>);
}
