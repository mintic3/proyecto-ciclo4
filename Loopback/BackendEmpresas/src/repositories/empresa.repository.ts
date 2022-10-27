import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoconexionDataSource} from '../datasources';
import {Empresa, EmpresaRelations, Sucursal} from '../models';
import {SucursalRepository} from './sucursal.repository';

export class EmpresaRepository extends DefaultCrudRepository<
  Empresa,
  typeof Empresa.prototype.id_empresa,
  EmpresaRelations
> {

  public readonly sucursals: HasManyRepositoryFactory<Sucursal, typeof Empresa.prototype.id_empresa>;

  constructor(
    @inject('datasources.mongoconexion') dataSource: MongoconexionDataSource, @repository.getter('SucursalRepository') protected sucursalRepositoryGetter: Getter<SucursalRepository>,
  ) {
    super(Empresa, dataSource);
    this.sucursals = this.createHasManyRepositoryFactoryFor('sucursals', sucursalRepositoryGetter,);
    this.registerInclusionResolver('sucursals', this.sucursals.inclusionResolver);
  }
}
