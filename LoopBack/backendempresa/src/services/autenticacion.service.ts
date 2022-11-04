import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Sucursal } from '../models';
import { Llaves } from '../config/llaves';
import { EmpresaRepository, SucursalRepository } from '../repositories';
const generador = require("password-generator")
const cryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(SucursalRepository)
    public sucursalRepository: SucursalRepository
  ) { }

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

  IdentificarSucursal(user: string, password: string) {
    try{
      let p = this.sucursalRepository.findOne({where: {user: user, password: password}})
      if(p){
        return p;
      }
      return false;
    } catch {
      return false;
    }
  }

  GenerarTokenJWT(sucursal: Sucursal){
    let token = jwt.sign({
      data:{
        id: sucursal.id,
        direccion: sucursal.direccion,
        telefono: sucursal.telefono
      }
    },
    Llaves.claveJWT);
  }

}
