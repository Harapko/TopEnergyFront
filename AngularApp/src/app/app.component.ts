import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./Shared/Ui/header/header/header.component";
import {SubHeaderComponent} from "./Body/UI/sub-header/sub-header.component";
import {ProductsComponent} from "./Body/UI/products/products.component";
import {CompetenciesComponent} from "./Body/UI/competenciesComponent/competencies/competencies.component";
import {BioChartComponent} from "./Body/UI/bio-chart/bio-chart.component";
import {ExperienceComponent} from "./Body/UI/experience/experience.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SubHeaderComponent, ProductsComponent, CompetenciesComponent, BioChartComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularApp';
}
