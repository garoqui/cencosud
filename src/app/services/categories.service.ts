import { Injectable } from '@angular/core';
import { URLSERVER } from '../constants/server'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categoriesURL = "assets/json/categorias.json"

  constructor( private httpclient : HttpClient) { }

  getCategories = ()=>{
    return this.httpclient.get(URLSERVER + this.categoriesURL)
  }
}
