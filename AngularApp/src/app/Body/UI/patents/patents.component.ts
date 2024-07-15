import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-patents',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './patents.component.html',
  styleUrl: './patents.component.scss'
})
export class PatentsComponent {

}
