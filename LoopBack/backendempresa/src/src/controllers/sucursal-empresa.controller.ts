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
  Sucursal,
  Empresa,
} from '../models';
import {SucursalRepository} from '../repositories';

export class SucursalEmpresaController {
  constructor(
    @repository(SucursalRepository) protected sucursalRepository: SucursalRepository,
  ) { }

  @get('/sucursals/{id}/empresa', {
    responses: {
      '200': {
        description: 'Sucursal has one Empresa',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Empresa),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Empresa>,
  ): Promise<Empresa> {
    return this.sucursalRepository.empresa(id).get(filter);
  }

  @post('/sucursals/{id}/empresa', {
    responses: {
      '200': {
        description: 'Sucursal model instance',
        content: {'application/json': {schema: getModelSchemaRef(Empresa)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Sucursal.prototype.id_sucursal,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empresa, {
            title: 'NewEmpresaInSucursal',
            exclude: ['id_empresa'],
            optional: ['sucursalId']
          }),
        },
      },
    }) empresa: Omit<Empresa, 'id_empresa'>,
  ): Promise<Empresa> {
    return this.sucursalRepository.empresa(id).create(empresa);
  }

  @patch('/sucursals/{id}/empresa', {
    responses: {
      '200': {
        description: 'Sucursal.Empresa PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empresa, {partial: true}),
        },
      },
    })
    empresa: Partial<Empresa>,
    @param.query.object('where', getWhereSchemaFor(Empresa)) where?: Where<Empresa>,
  ): Promise<Count> {
    return this.sucursalRepository.empresa(id).patch(empresa, where);
  }

  @del('/sucursals/{id}/empresa', {
    responses: {
      '200': {
        description: 'Sucursal.Empresa DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Empresa)) where?: Where<Empresa>,
  ): Promise<Count> {
    return this.sucursalRepository.empresa(id).delete(where);
  }
}
