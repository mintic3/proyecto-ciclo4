import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Cliente extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_cliente?: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

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
  nombre_cliente: string;

  @property({
    type: 'string',
    required: true,
  })
  apellido_cliente: string;

  @property({
    type: 'string',
    required: true,
  })
  n_documento: string;

  @property({
    type: 'string',
  })
  sucursalId?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
