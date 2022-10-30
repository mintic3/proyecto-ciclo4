import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MongoconexionDataSource} from '../datasources';
import {Empleado, EmpleadoRelations, Sucursal} from '../models';
import {SucursalRepository} from './sucursal.repository';

export class EmpleadoRepository extends DefaultCrudRepository<
  Empleado,
  typeof Empleado.prototype.id_empleado,
  EmpleadoRelations
> {

  public readonly sucursal: HasOneRepositoryFactory<Sucursal, typeof Empleado.prototype.id_empleado>;

  constructor(
    @inject('datasources.mongoconexion') dataSource: MongoconexionDataSource, @repository.getter('SucursalRepository') protected sucursalRepositoryGetter: Getter<SucursalRepository>,
  ) {
    super(Empleado, dataSource);
    this.sucursal = this.createHasOneRepositoryFactoryFor('sucursal', sucursalRepositoryGetter);
    this.registerInclusionResolver('sucursal', this.sucursal.inclusionResolver);
  }
}
