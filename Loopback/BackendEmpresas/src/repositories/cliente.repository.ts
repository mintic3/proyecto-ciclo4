import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoconexionDataSource} from '../datasources';
import {Cliente, ClienteRelations, Sucursal} from '../models';
import {SucursalRepository} from './sucursal.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id_cliente,
  ClienteRelations
> {

  public readonly sucursals: HasManyRepositoryFactory<Sucursal, typeof Cliente.prototype.id_cliente>;

  constructor(
    @inject('datasources.mongoconexion') dataSource: MongoconexionDataSource, @repository.getter('SucursalRepository') protected sucursalRepositoryGetter: Getter<SucursalRepository>,
  ) {
    super(Cliente, dataSource);
    this.sucursals = this.createHasManyRepositoryFactoryFor('sucursals', sucursalRepositoryGetter,);
    this.registerInclusionResolver('sucursals', this.sucursals.inclusionResolver);
  }
}
