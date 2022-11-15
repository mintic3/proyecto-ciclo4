import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory, HasOneRepositoryFactory, repository} from '@loopback/repository';
import {MongoconexionDataSource} from '../datasources';
import {Cliente, Empleado, Empresa, Sucursal, SucursalRelations} from '../models';
import {ClienteRepository} from './cliente.repository';
import {EmpleadoRepository} from './empleado.repository';
import {EmpresaRepository} from './empresa.repository';

export class SucursalRepository extends DefaultCrudRepository<
  Sucursal,
  typeof Sucursal.prototype.id_sucursal,
  SucursalRelations
> {

  public readonly empresa: HasOneRepositoryFactory<Empresa, typeof Sucursal.prototype.id_sucursal>;

  public readonly empleados: HasManyRepositoryFactory<Empleado, typeof Sucursal.prototype.id_sucursal>;

  public readonly clientes: HasManyRepositoryFactory<Cliente, typeof Sucursal.prototype.id_sucursal>;

  constructor(
    @inject('datasources.mongoconexion') dataSource: MongoconexionDataSource, @repository.getter('EmpresaRepository') protected empresaRepositoryGetter: Getter<EmpresaRepository>, @repository.getter('EmpleadoRepository') protected empleadoRepositoryGetter: Getter<EmpleadoRepository>, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>,
  ) {
    super(Sucursal, dataSource);
    this.clientes = this.createHasManyRepositoryFactoryFor('clientes', clienteRepositoryGetter,);
    this.registerInclusionResolver('clientes', this.clientes.inclusionResolver);
    this.empleados = this.createHasManyRepositoryFactoryFor('empleados', empleadoRepositoryGetter,);
    this.registerInclusionResolver('empleados', this.empleados.inclusionResolver);
    this.empresa = this.createHasOneRepositoryFactoryFor('empresa', empresaRepositoryGetter);
    this.registerInclusionResolver('empresa', this.empresa.inclusionResolver);
  }
}
