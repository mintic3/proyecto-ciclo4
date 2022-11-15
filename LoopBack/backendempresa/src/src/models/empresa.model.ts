import {Entity, model, property, hasMany} from '@loopback/repository';
import {Sucursal} from './sucursal.model';

@model({settings: {strict: false}})
export class Empresa extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_empresa?: string;

  @property({
    type: 'number',
    required: true,
  })
  nit: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  telefono: number;

  @property({
    type: 'string',
    required: true,
  })
  direcion: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  CIIU: string;

  @hasMany(() => Sucursal)
  sucursals: Sucursal[];

  @property({
    type: 'string',
  })
  sucursalId?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Empresa>) {
    super(data);
  }
}

export interface EmpresaRelations {
  // describe navigational properties here
}

export type EmpresaWithRelations = Empresa & EmpresaRelations;
