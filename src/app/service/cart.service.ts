import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
public cartItemList: any=[];
public productList = new BehaviorSubject<any>([]);
  constructor() { }
getProducts() {
  return this.productList.asObservable();
}

setProduct(product: any){
  this.cartItemList.push(...product);
  this.productList.next(product)
}
addtocart(product: any){
  this.cartItemList.push(product);
  this.productList.next(this.cartItemList);
  this.gettotal();
}
gettotal():number{
   let grandtotal=0;
   
   this.cartItemList.map((a:any)=>{
    grandtotal += a.total;
   })
   return grandtotal
}
removeCartitem(product: any){
  this.cartItemList.map((a:any, index:any)=>{
    if(product.id === a.id){
      this.cartItemList.splice(index,1)
    }
  })
}
removeall(){
  this.cartItemList= []
  this.cartItemList.next(this.cartItemList);
}

}

