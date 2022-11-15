import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Llaves} from '../config/llaves';
import {Cliente} from '../models';
import {ClienteRepository} from '../repositories';
const generador = require("pasword-generator");
const cryptoJS = require ("crypto-js");
const jwt =require("jsonwebtoken");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(ClienteRepository)
    public clienteRepository: ClienteRepository

    ) { }

  /*
   * Add service methods here
   */
 GenerarClave(){
  let clave = generador(8,false);
  return clave;
 }

 CifrarClave(clave: string){
  let claveCifrada = cryptoJS.MD5(clave).toString();
  return claveCifrada;
 }
 IdentificarPersona(usuario: string, clave: String){
  try{
    let p = this.clienteRepository.findOne({where:{email: usuario, clave: clave}});
    if(p){
      return p;
    }
    return false;
  } catch{
    return false;
  }

 }
 GenerarTokenJWT(cliente:Cliente){
  let token = jwt.sign({
    data:{
      id: cliente.id_cliente,
      email: cliente.email,
      nombre: cliente.nombre_cliente + " " + cliente.apellido_cliente
    }

  },
    Llaves.claveJWT);

 }
 ValidarTokenJWT(token: string){
  try{
    let datos = jwt.verify(token, Llaves.claveJWT);
    return datos;

  } catch{
    return false;
  }

 }
}
