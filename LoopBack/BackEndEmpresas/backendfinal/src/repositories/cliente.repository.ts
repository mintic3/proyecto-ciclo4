import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbconexionDataSource} from '../datasources';
import {Cliente, ClienteRelations} from '../models';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id_cliente,
  ClienteRelations
> {
  constructor(
    @inject('datasources.mongodbconexion') dataSource: MongodbconexionDataSource,
  ) {
    super(Cliente, dataSource);
  }
}
