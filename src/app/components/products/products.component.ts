import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  category:String
  products:any;
  productsFilter
  constructor(private activatedRoute : ActivatedRoute, private productsService : ProductsService) { }

  ngOnInit() { 
    this.products = []   
    this.category = this.activatedRoute.snapshot.params.id
    this.getAllProducts()
  }

  ngOnChnages(){
    this.products = []
    this.getAllProducts()
  }

  getAllProducts = ()=>{
    
    this.productsService.getProducts()
    .subscribe((res:any)=>{     
      this.products = Array.from(res.products)      
      this.productsFilter = this.products.filter(res=>res.sublevel_id == this.category)
      console.log(this.productsFilter)
           
    })
  }

}
