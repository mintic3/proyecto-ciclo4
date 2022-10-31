import {Entity, model, property} from '@loopback/repository';

@model()
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
    required: true,
  })
  tipo_documento: string;

  @property({
    type: 'string',
  })
  sucursalId?: string;

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
