import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoriesService } from '../../services/categories.service'
import { category } from '../../models/category'
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  // showing categories from navbar component
  @Input() public display
  @Output() SendShow = new EventEmitter();
  
  public category = "0"
  categoriesClass = "categories nodisplay"
  subcategoriesClass = "subcategories nodisplay"
  data:any = []
  categories : any
  subcategories = []
  detailSubcategories = []
  subCategory = 0
  constructor(private categoriesService : CategoriesService, private router:Router) { }

  ngOnInit() {   
    this.getCategories()
  }

  //showing menu categories from navbar changing class
  ngOnChanges(){
    this.display ? this.categoriesClass ="categories display" : this.categoriesClass = "categories nodisplay"
    this.display ? this.subcategoriesClass ="subcategories display" : this.subcategoriesClass = "subcategories nodisplay"
  }

  //showing all categories
  getCategories = ()=>{
    this.categoriesService.getCategories()
    .subscribe(res=>{      
      this.data = res
      this.categories = this.data.categories.map(res=>res)    
    })
  }

  //showing subcategories fro category

  getSubcategory = (event)=>{    
    this.detailSubcategories = []    
    this.subcategories = this.categories.filter(res => res.id == event.target.id).map(res=>res.sublevels.map(res=>res))
    this.subcategoriesClass = "subcategories display"
      try{  
      this.subcategories.map(res=>{
        res.map(res=>{
          res.sublevels.map(res=>{
            this.detailSubcategories.push(res)                    
          })
        })      
      })
     }
     catch{
    
     }             
  }

  getCategory(event){
    this.category = event.target.id   
    this.categoriesClass = "categories nodisplay"
    this.subcategoriesClass = "subcategories nodisplay"
    this.SendShow.emit({showcategory : false})    
  }


 

}
