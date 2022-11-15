import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Cliente,
  Sucursal,
} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteSucursalController {
  constructor(
    @repository(ClienteRepository) protected clienteRepository: ClienteRepository,
  ) { }

  @get('/clientes/{id}/sucursals', {
    responses: {
      '200': {
        description: 'Array of Cliente has many Sucursal',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Sucursal)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Sucursal>,
  ): Promise<Sucursal[]> {
    return this.clienteRepository.sucursals(id).find(filter);
  }

  @post('/clientes/{id}/sucursals', {
    responses: {
      '200': {
        description: 'Cliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(Sucursal)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Cliente.prototype.id_cliente,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sucursal, {
            title: 'NewSucursalInCliente',
            exclude: ['id_sucursal'],
            optional: ['clienteId']
          }),
        },
      },
    }) sucursal: Omit<Sucursal, 'id_sucursal'>,
  ): Promise<Sucursal> {
    return this.clienteRepository.sucursals(id).create(sucursal);
  }

  @patch('/clientes/{id}/sucursals', {
    responses: {
      '200': {
        description: 'Cliente.Sucursal PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sucursal, {partial: true}),
        },
      },
    })
    sucursal: Partial<Sucursal>,
    @param.query.object('where', getWhereSchemaFor(Sucursal)) where?: Where<Sucursal>,
  ): Promise<Count> {
    return this.clienteRepository.sucursals(id).patch(sucursal, where);
  }

  @del('/clientes/{id}/sucursals', {
    responses: {
      '200': {
        description: 'Cliente.Sucursal DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Sucursal)) where?: Where<Sucursal>,
  ): Promise<Count> {
    return this.clienteRepository.sucursals(id).delete(where);
  }
}
