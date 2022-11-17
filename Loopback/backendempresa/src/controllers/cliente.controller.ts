import {service} from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, HttpErrors, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Cliente} from '../models';
import { Credenciales } from '../models/credenciales.model';
import {ClienteRepository} from '../repositories';
import {AutenticacionService} from '../services';
const fetch =require ("node-fetch");

export class ClienteController {
  constructor(
    @repository(ClienteRepository)
    public clienteRepository : ClienteRepository,
    @service(AutenticacionService)
    public serviceAutenticacion:AutenticacionService
  ) {}
  async identificarCliente(
    @requestBody() credenciales: Credenciales
  ): Promise<{ datos: { nombre: any; correo: any; id: any; }; tk: void; }>{
    let p = await this.serviceAutenticacion.IdentificarCLiente(credenciales.usuario,credenciales.clave)
    if(p){
      let token = this.serviceAutenticacion.GenerarTokenJWT(p);
      return {
        datos : {
          nombre : p.nombre_cliente,
          correo: p.email,
          id: p.id_cliente
        },
        tk: token
      }

    }else{
      throw new HttpErrors[401]("Datos inválidos");
    }
  }
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cliente, {
            title: 'NewCliente',
            exclude: ['id'],
          }),
        },
      },
    })
    cliente: Omit<Cliente, 'id'>,
  ): Promise<Cliente> {
      let clave = this.serviceAutenticacion.GenerarClave();
      let claveCifrada = this.serviceAutenticacion.CifrarClave(clave);
      cliente.clave = claveCifrada;
      let p = await this.clienteRepository.create(cliente);

    // Notificación al usuario
    let destino = cliente.email;
    let asunto = "Resgistro en la plataforma";
    let contenido = `Bienvenido ${cliente.nombre_cliente}, su nombre de ususario es: ${cliente.email} y su contraseña es: ${clave}`;
    fetch("${Llaves.urlServicioNotificaciones}/envio-correos?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}")
      .then((data: any)=> {
        console.log(data);

      })
      return p;
  }
  async count(
    @param.where(Cliente) where?: Where<Cliente>,
  ): Promise<Count> {
    return this.clienteRepository.count(where);
  }

    async find(
    @param.filter(Cliente) filter?: Filter<Cliente>,
  ): Promise<Cliente[]> {
    return this.clienteRepository.find(filter);
  }
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cliente, {partial: true}),
        },
      },
    })
    cliente: Cliente,
    @param.where(Cliente) where?: Where<Cliente>,
  ): Promise<Count> {
    return this.clienteRepository.updateAll(cliente, where);
  }
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Cliente, {exclude: 'where'}) filter?: FilterExcludingWhere<Cliente>
  ): Promise<Cliente> {
    return this.clienteRepository.findById(id, filter);
  }
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cliente, {partial: true}),
        },
      },
    })
    cliente: Cliente,
  ): Promise<void> {
    await this.clienteRepository.updateById(id, cliente);
  }
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() cliente: Cliente,
  ): Promise<void> {
    await this.clienteRepository.replaceById(id, cliente);
  }
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.clienteRepository.deleteById(id);
  }
}
