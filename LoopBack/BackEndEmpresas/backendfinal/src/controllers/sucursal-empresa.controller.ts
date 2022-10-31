import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Sucursal,
  Empresa,
} from '../models';
import {SucursalRepository} from '../repositories';

export class SucursalEmpresaController {
  constructor(
    @repository(SucursalRepository)
    public sucursalRepository: SucursalRepository,
  ) { }

  @get('/sucursals/{id}/empresa', {
    responses: {
      '200': {
        description: 'Empresa belonging to Sucursal',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Empresa)},
          },
        },
      },
    },
  })
  async getEmpresa(
    @param.path.string('id') id: typeof Sucursal.prototype.id_sucursal,
  ): Promise<Empresa> {
    return this.sucursalRepository.empresa(id);
  }
}
