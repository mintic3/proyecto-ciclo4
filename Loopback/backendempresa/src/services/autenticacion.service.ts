import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Cliente, Sucursal } from '../models';
import { Llaves } from '../config/llaves';
//import { ClienteRepository, EmpresaRepository, SucursalRepository } from '../repositories';
const generador = require("password-generator")
const cryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  clienteRepository: any;
  
 /* constructor(
    @repository(ClienteRepository)
    public clienteRepository: ClienteRepository
  ) { }*/

  /*
   * Add service methods here
   */
  GenerarClave() {
    let clave = generador(8, false)
    return clave;
  }

  CifrarClave(clave: string){
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }

  GenerarTokenJWT(cliente: Cliente){
    let token = jwt.sign({
      data:{
        id: cliente.id,
        correo:cliente.email,
        nombre: cliente.nombre_cliente + " " +cliente.apellido_cliente
      }
    },
      Llaves.claveJWT);
    return token;
  }
  IdentificarCLiente(usuario: string, clave: string) {
    try {
      let p = this.clienteRepository.findOne({where:{correo: usuario, clave: clave}});
      if (p){
        return p
      }
      return false;
      }
      catch{
        return false;

      }
  
    }
  ValidarTokenJWT(token:string){
    try{
      let datos = jwt.verify(token, Llaves.claveJWT);
      return datos;

    }catch{
      return false;

    }
  }
}
