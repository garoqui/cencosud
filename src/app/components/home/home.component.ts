import { Component, OnInit, Input} from '@angular/core';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() public category
  products:any;
  productsFilter
  public valini
  public valfin
  public stockini
  public stockfin
  constructor(private productsService : ProductsService) {
    this.valini = 0
    this.valfin = 0
    this.stockini = 0
    this.stockfin = 0

   }
  

  ngOnInit() {
    this.getAllProducts()    
  }

  ngOnChanges(){
    this.getAllProducts() 
    
         
  }

  getAllProducts = ()=>{
    this.productsService.getProducts()
    .subscribe((res:any)=>{     
      this.products = Array.from(res.products)
      let miarr = this.products.filter(res=>res.sublevel_id== this.category)
      this.productsFilter = miarr        
    })
  }

  order = (event)=>{    
    event.target.value == "1" ? this.productsFilter.sort((a,b)=>(parseFloat(a.price.substr(1,a.price.length)) - parseFloat(b.price.substr(1,b.price.length)))) : false
    event.target.value == "2" ? this.productsFilter.sort((a,b)=> (a.available < b.available) ? 1 : -1 ) : false
    event.target.value == "3" ? this.productsFilter.sort((a,b)=> parseInt(a.quantity) - parseInt(b.quantity)) : false    
  }

  filter = (event)=>{    
    let opc = event.target.value   
    if(opc == "0"){
      this.getAllProducts() 
    }else{
      this.getAllProducts()
      this.getFilter(opc).then(res=>{
        this.productsFilter = res
       console.log(this.productsFilter)
    })     
  }
}

filterPrice = ()=>{
  this.getAllProducts()
  this.getFilterPrice().then(res=>this.productsFilter=res)
}

filterStock = ()=>{
  this.getAllProducts()
  this.getFilterStock().then(res=>this.productsFilter=res)
}

getFilter = (opc)=>{    
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let arr    
        if(opc === "1"){
          arr =this.productsFilter.filter(res=>res.available === true)         
        }else{
          arr =this.productsFilter.filter(res=>res.available === false)          
          }        
        resolve(arr)
      },1000)    
      })
  }
  
getFilterPrice = ()=>{    
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let arr          
        arr =this.productsFilter.filter(res=>parseFloat(res.price.substr(1,res.price.length))>= this.valini && parseFloat(res.price.substr(1,res.price.length))<= this.valfin)         
       
        resolve(arr)
      },1000)    
      })
  }

  getFilterStock = ()=>{    
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let arr          
        arr =this.productsFilter.filter(res=>parseInt(res.quantity)>= this.stockini && parseInt(res.quantity)<= this.stockfin)     
        console.log(arr)
        resolve(arr)
      },1000)    
      })
  }
}
