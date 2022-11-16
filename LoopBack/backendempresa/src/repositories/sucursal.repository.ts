import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbconexionDataSource} from '../datasources';
import {Sucursal, SucursalRelations, Empresa, Empleado, Cliente} from '../models';
import {EmpresaRepository} from './empresa.repository';
import {EmpleadoRepository} from './empleado.repository';
import {ClienteRepository} from './cliente.repository';

export class SucursalRepository extends DefaultCrudRepository<
  Sucursal,
  typeof Sucursal.prototype.id,
  SucursalRelations
> {
  [x: string]: any;

  public readonly empresa: BelongsToAccessor<Empresa, typeof Sucursal.prototype.id>;

  public readonly empleados: HasManyRepositoryFactory<Empleado, typeof Sucursal.prototype.id>;

  public readonly clientes: HasManyRepositoryFactory<Cliente, typeof Sucursal.prototype.id>;

  constructor(
    @inject('datasources.mongodbconexion') dataSource: MongodbconexionDataSource, @repository.getter('EmpresaRepository') protected empresaRepositoryGetter: Getter<EmpresaRepository>, @repository.getter('EmpleadoRepository') protected empleadoRepositoryGetter: Getter<EmpleadoRepository>, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>,
  ) {
    super(Sucursal, dataSource);
    this.clientes = this.createHasManyRepositoryFactoryFor('clientes', clienteRepositoryGetter,);
    this.registerInclusionResolver('clientes', this.clientes.inclusionResolver);
    this.empleados = this.createHasManyRepositoryFactoryFor('empleados', empleadoRepositoryGetter,);
    this.registerInclusionResolver('empleados', this.empleados.inclusionResolver);
    this.empresa = this.createBelongsToAccessorFor('empresa', empresaRepositoryGetter,);
    this.registerInclusionResolver('empresa', this.empresa.inclusionResolver);
  }
}
