import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-patents',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './patents.component.html',
  styleUrl: './patents.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PatentsComponent {

}
