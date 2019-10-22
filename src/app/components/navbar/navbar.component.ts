import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public  showCategory = false
  public showProductsFilter = "all" 
  
 
  constructor() { }

  ngOnInit() {
  
  } 

  changeViewCategory=()=>{    
    this.showCategory==false ? this.showCategory = true : this.showCategory = false   
  }

  changeView(event){    
    this.showCategory = event.showcategory
  }
 

}
