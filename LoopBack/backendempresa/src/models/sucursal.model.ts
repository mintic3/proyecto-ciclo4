import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Empresa} from './empresa.model';
import {Empleado} from './empleado.model';
import {Cliente} from './cliente.model';

@model()
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
    type: 'string',
    required: true,
  })
  telefono: string;

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
    required: true,
  })
  administrador: string;

  @belongsTo(() => Empresa)
  empresaId: string;

  @hasMany(() => Empleado)
  empleados: Empleado[];

  @hasMany(() => Cliente)
  clientes: Cliente[];

  constructor(data?: Partial<Sucursal>) {
    super(data);
  }
}

export interface SucursalRelations {
  // describe navigational properties here
}

export type SucursalWithRelations = Sucursal & SucursalRelations;
