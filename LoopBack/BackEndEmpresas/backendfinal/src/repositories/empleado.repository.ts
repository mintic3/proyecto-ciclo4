import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbconexionDataSource} from '../datasources';
import {Empleado, EmpleadoRelations, Sucursal} from '../models';
import {SucursalRepository} from './sucursal.repository';

export class EmpleadoRepository extends DefaultCrudRepository<
  Empleado,
  typeof Empleado.prototype.id_empleado,
  EmpleadoRelations
> {

  public readonly sucursal: BelongsToAccessor<Sucursal, typeof Empleado.prototype.id_empleado>;

  constructor(
    @inject('datasources.mongodbconexion') dataSource: MongodbconexionDataSource, @repository.getter('SucursalRepository') protected sucursalRepositoryGetter: Getter<SucursalRepository>,
  ) {
    super(Empleado, dataSource);
    this.sucursal = this.createBelongsToAccessorFor('sucursal', sucursalRepositoryGetter,);
    this.registerInclusionResolver('sucursal', this.sucursal.inclusionResolver);
  }
}
