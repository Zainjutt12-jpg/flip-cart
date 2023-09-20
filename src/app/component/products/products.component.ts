import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ServiceService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductComponent implements OnInit {
public productList: any;

constructor(private api:ApiService, private cartService: ServiceService){}

ngOnInit(): void {
  this.api.getProduct()
  .subscribe(res=>{
    this.productList=res;
    this.productList.forEach((a:any)=> {
      Object.assign(a,{quantity:1,total:a.price})
    });
  })

}
addtocart(item: any){

    this.cartService.addtocart(item)
}


}
