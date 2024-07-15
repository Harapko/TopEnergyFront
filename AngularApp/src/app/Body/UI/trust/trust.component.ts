import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import SwiperCore from 'swiper';
import {NgOptimizedImage} from "@angular/common";


@Component({
  selector: 'app-trust',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './trust.component.html',
  styleUrl: './trust.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrustComponent {

}
