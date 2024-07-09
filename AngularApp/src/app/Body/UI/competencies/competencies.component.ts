import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-competencies',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './competencies.component.html',
  styleUrl: './competencies.component.scss'
})
export class CompetenciesComponent {

}
