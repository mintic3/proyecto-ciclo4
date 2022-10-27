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
  Empleado,
  Sucursal,
} from '../models';
import {EmpleadoRepository} from '../repositories';

export class EmpleadoSucursalController {
  constructor(
    @repository(EmpleadoRepository) protected empleadoRepository: EmpleadoRepository,
  ) { }

  @get('/empleados/{id}/sucursal', {
    responses: {
      '200': {
        description: 'Empleado has one Sucursal',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Sucursal),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Sucursal>,
  ): Promise<Sucursal> {
    return this.empleadoRepository.sucursal(id).get(filter);
  }

  @post('/empleados/{id}/sucursal', {
    responses: {
      '200': {
        description: 'Empleado model instance',
        content: {'application/json': {schema: getModelSchemaRef(Sucursal)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Empleado.prototype.id_empleado,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sucursal, {
            title: 'NewSucursalInEmpleado',
            exclude: ['id_sucursal'],
            optional: ['empleadoId']
          }),
        },
      },
    }) sucursal: Omit<Sucursal, 'id_sucursal'>,
  ): Promise<Sucursal> {
    return this.empleadoRepository.sucursal(id).create(sucursal);
  }

  @patch('/empleados/{id}/sucursal', {
    responses: {
      '200': {
        description: 'Empleado.Sucursal PATCH success count',
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
    return this.empleadoRepository.sucursal(id).patch(sucursal, where);
  }

  @del('/empleados/{id}/sucursal', {
    responses: {
      '200': {
        description: 'Empleado.Sucursal DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Sucursal)) where?: Where<Sucursal>,
  ): Promise<Count> {
    return this.empleadoRepository.sucursal(id).delete(where);
  }
}
