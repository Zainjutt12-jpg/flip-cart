import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 public product: any=[];
public grandtotal=0;

  constructor(private cartService:ServiceService){

  }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.product= res;
      this.grandtotal = this.cartService.gettotal();
    })
  }

  removeItem(item:any){
this.cartService.removeCartitem(item)
  }
  emptycart(){
    this.cartService.removeall()
  }
}
