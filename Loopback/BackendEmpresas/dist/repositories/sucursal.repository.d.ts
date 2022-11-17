import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, HasOneRepositoryFactory } from '@loopback/repository';
import { MongoconexionDataSource } from '../datasources';
import { Cliente, Empleado, Empresa, Sucursal, SucursalRelations } from '../models';
import { ClienteRepository } from './cliente.repository';
import { EmpleadoRepository } from './empleado.repository';
import { EmpresaRepository } from './empresa.repository';
export declare class SucursalRepository extends DefaultCrudRepository<Sucursal, typeof Sucursal.prototype.id_sucursal, SucursalRelations> {
    protected empresaRepositoryGetter: Getter<EmpresaRepository>;
    protected empleadoRepositoryGetter: Getter<EmpleadoRepository>;
    protected clienteRepositoryGetter: Getter<ClienteRepository>;
    readonly empresa: HasOneRepositoryFactory<Empresa, typeof Sucursal.prototype.id_sucursal>;
    readonly empleados: HasManyRepositoryFactory<Empleado, typeof Sucursal.prototype.id_sucursal>;
    readonly clientes: HasManyRepositoryFactory<Cliente, typeof Sucursal.prototype.id_sucursal>;
    constructor(dataSource: MongoconexionDataSource, empresaRepositoryGetter: Getter<EmpresaRepository>, empleadoRepositoryGetter: Getter<EmpleadoRepository>, clienteRepositoryGetter: Getter<ClienteRepository>);
}
