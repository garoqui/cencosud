import { Injectable } from '@angular/core';
import { URLSERVER } from '../constants/server'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsURL = "assets/json/productos.json"

  constructor( private httpclient : HttpClient) { }

  getProducts = ()=>{
    return this.httpclient.get(URLSERVER + this.productsURL)
  }
}
