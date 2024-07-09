import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./Shared/Ui/header/header/header.component";
import {SubHeaderComponent} from "./Body/UI/sub-header/sub-header.component";
import {ProductsComponent} from "./Body/UI/products/products.component";
import {CompetenciesComponent} from "./Body/UI/competencies/competencies.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SubHeaderComponent, ProductsComponent, CompetenciesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularApp';
}
