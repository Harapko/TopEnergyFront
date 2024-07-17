import { Component } from '@angular/core';
import {BioChartComponent} from "../bio-chart/bio-chart.component";
import {CompetenciesComponent} from "../competenciesComponent/competencies/competencies.component";
import {ExperienceComponent} from "../experience/experience.component";
import {MapComponent} from "../map/map.component";
import {NewsComponent} from "../news/news.component";
import {OfferComponent} from "../offer/offer.component";
import {PatentsComponent} from "../patents/patents.component";
import {ProductsComponent} from "../products/products.component";
import {SubHeaderComponent} from "../sub-header/sub-header.component";
import {TrustComponent} from "../trust/trust.component";

@Component({
  selector: 'app-unit-body',
  standalone: true,
    imports: [
        BioChartComponent,
        CompetenciesComponent,
        ExperienceComponent,
        MapComponent,
        NewsComponent,
        OfferComponent,
        PatentsComponent,
        ProductsComponent,
        SubHeaderComponent,
        TrustComponent
    ],
  templateUrl: './unit-body.component.html',
  styleUrl: './unit-body.component.scss'
})
export class UnitBodyComponent {

}
