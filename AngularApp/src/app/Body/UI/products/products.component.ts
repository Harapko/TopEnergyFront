import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ScrollHeaderService} from "../../../Shared/Core/scroll-header.service";
import {ScrollSpyDirective} from "../../Core/scroll-spy.directive";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    ScrollSpyDirective,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
