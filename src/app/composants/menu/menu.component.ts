import { Component } from '@angular/core';
import { Menu } from './menu';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Router } from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public menuPropreties: Array<Menu> = [
  {
    id:'1',
    titre:'dashboard',
    icon:"fa-solid fa-chart-line",
    url:'',
    sousMenu:[
      {
        id:"11",
        titre:'Overview',
        icon:"fa-solid fa-chart-pie",
        url:""
      },
      {
        id:"12",
        titre:'Statistics',
        icon:"fa-solid fa-chart-simple",
        url:"statistique"
      }
    ]
  },
  {
    id:"2",
    titre:'Articles',
    icon:"fa-solid fa-boxes-stacked",
    url:"",
    sousMenu:[
      {
        id:"21",
        titre:'Articles',
        icon:"fa-solid fa-box",
        url:"articles",
      },
      {
        id:"22",
        titre:'Inventory movement',
        icon:"fa-brands fa-stack-overflow",
        url:"",
      }
    ]
  },
  {
    id:"3",
    titre:'Clients',
    icon:"fa-solid fa-users",
    url:"",
    sousMenu:[
      {
        id:"31",
        titre:'Clients',
        icon:"fa-solid fa-users",
        url:"",
      },
      {
        id:"32",
        titre:'Customers orders',
        icon:"fa-solid fa-boxes-packing",
        url:"",
      }
    ]
  },
  {
    id:"4",
    titre:'Vendors',
    icon:"fa-solid fa-shop",
    url:"",
    sousMenu:[
      {
        id:"41",
        titre:'Vendors',
        icon:"fa-solid fa-shop",
        url:"",
      },
      {
        id:"42",
        titre:'Vendors orders',
        icon:"fa-solid fa-store",
        url:"",
      }
    ]
  },
  {
    id:"5",
    titre:'Settings',
    icon:"fa-solid fa-gears",
    url:"",
    sousMenu:[
      {
        id:"51",
        titre:'Categories',
        icon:"fa-solid fa-gears",
        url:"",
      },
      {
        id:"52",
        titre:'Users',
        icon:"fa-solid fa-users-gear",
        url:"",
      }
    ]
  }];


  constructor (
    private router: Router
  ) {  }

  navigate(url?: string): void {
    this.router.navigate([url]);
  }
  


}
