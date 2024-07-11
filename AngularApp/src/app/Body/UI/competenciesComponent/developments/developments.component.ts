import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-developments',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './developments.component.html',
  styleUrl: './developments.component.scss'
})
export class DevelopmentsComponent {

}
