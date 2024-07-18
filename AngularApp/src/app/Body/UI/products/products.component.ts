import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  ngOnInit(){
    this.scrollTest();
  }

  public scrollTest(){
    let product = document.getElementById('product__list')
    if (product){
      window.addEventListener('scroll',()=>{
        let value = window.scrollY;
        product.style.left =+ value * 0.35 + 'px';
        // product.style.left = value + 'px';
        console.log(value);
      })
    }
  }
}
