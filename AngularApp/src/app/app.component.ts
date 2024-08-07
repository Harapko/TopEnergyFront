import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./Shared/Ui/header/header/header.component";
import {SubHeaderComponent} from "./Body/UI/sub-header/sub-header.component";
import {ProductsComponent} from "./Body/UI/products/products.component";
import {CompetenciesComponent} from "./Body/UI/competenciesComponent/competencies/competencies.component";
import {BioChartComponent} from "./Body/UI/bio-chart/bio-chart.component";
import {ExperienceComponent} from "./Body/UI/experience/experience.component";
import {PatentsComponent} from "./Body/UI/patents/patents.component";
import {TrustComponent} from "./Body/UI/trust/trust.component";
import {MapComponent} from "./Body/UI/map/map.component";
import {NewsComponent} from "./Body/UI/news/news.component";
import {OfferComponent} from "./Body/UI/offer/offer.component";
import {UnitBodyComponent} from "./Body/UI/unit-body/unit-body.component";
import {NavComponent} from "./Shared/Ui/header/nav/nav.component";
import {FooterComponent} from "./Shared/Ui/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SubHeaderComponent, ProductsComponent, CompetenciesComponent, BioChartComponent, ExperienceComponent, PatentsComponent, TrustComponent, MapComponent, NewsComponent, OfferComponent, UnitBodyComponent, NavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularApp';
}
