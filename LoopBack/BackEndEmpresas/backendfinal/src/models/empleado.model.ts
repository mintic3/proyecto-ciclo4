import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Sucursal} from './sucursal.model';

@model({settings: {strict: false}})
export class Empleado extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_empleado?: string;

  @property({
    type: 'string',
    required: true,
  })
  salario: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo_documento: string;

  @property({
    type: 'boolean',
    required: true,
  })
  directivo: boolean;

  @property({
    type: 'string',
    required: true,
  })
  n_documento: string;

  @belongsTo(() => Sucursal)
  sucursalId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Empleado>) {
    super(data);
  }
}

export interface EmpleadoRelations {
  // describe navigational properties here
}

export type EmpleadoWithRelations = Empleado & EmpleadoRelations;
