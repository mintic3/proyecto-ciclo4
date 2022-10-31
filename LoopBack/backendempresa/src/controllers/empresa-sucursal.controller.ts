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
  Empresa,
  Sucursal,
} from '../models';
import {EmpresaRepository} from '../repositories';

export class EmpresaSucursalController {
  constructor(
    @repository(EmpresaRepository) protected empresaRepository: EmpresaRepository,
  ) { }

  @get('/empresas/{id}/sucursals', {
    responses: {
      '200': {
        description: 'Array of Empresa has many Sucursal',
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
    return this.empresaRepository.sucursals(id).find(filter);
  }

  @post('/empresas/{id}/sucursals', {
    responses: {
      '200': {
        description: 'Empresa model instance',
        content: {'application/json': {schema: getModelSchemaRef(Sucursal)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Empresa.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sucursal, {
            title: 'NewSucursalInEmpresa',
            exclude: ['id'],
            optional: ['empresaId']
          }),
        },
      },
    }) sucursal: Omit<Sucursal, 'id'>,
  ): Promise<Sucursal> {
    return this.empresaRepository.sucursals(id).create(sucursal);
  }

  @patch('/empresas/{id}/sucursals', {
    responses: {
      '200': {
        description: 'Empresa.Sucursal PATCH success count',
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
    return this.empresaRepository.sucursals(id).patch(sucursal, where);
  }

  @del('/empresas/{id}/sucursals', {
    responses: {
      '200': {
        description: 'Empresa.Sucursal DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Sucursal)) where?: Where<Sucursal>,
  ): Promise<Count> {
    return this.empresaRepository.sucursals(id).delete(where);
  }
}
