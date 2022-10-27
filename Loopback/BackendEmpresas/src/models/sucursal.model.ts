import {Entity, model, property, hasOne, hasMany} from '@loopback/repository';
import {Empresa} from './empresa.model';
import {Empleado} from './empleado.model';
import {Cliente} from './cliente.model';

@model({settings: {strict: false}})
export class Sucursal extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_sucursal?: string;

  @property({
    type: 'string',
    required: true,
  })
  direcion: string;

  @property({
    type: 'number',
    required: true,
  })
  telefono: number;

  @property({
    type: 'string',
    required: true,
  })
  adminstrador: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  user: string;

  @property({
    type: 'string',
  })
  empresaId?: string;

  @hasOne(() => Empresa)
  empresa: Empresa;

  @hasMany(() => Empleado)
  empleados: Empleado[];

  @property({
    type: 'string',
  })
  empleadoId?: string;

  @hasMany(() => Cliente)
  clientes: Cliente[];

  @property({
    type: 'string',
  })
  clienteId?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Sucursal>) {
    super(data);
  }
}

export interface SucursalRelations {
  // describe navigational properties here
}

export type SucursalWithRelations = Sucursal & SucursalRelations;
