import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {DevelopmentsComponent} from "../developments/developments.component";
import {PhysicsComponent} from "../physics/physics.component";
import {DesignComponent} from "../design/design.component";
import {GoalComponent} from "../goal/goal.component";
import {ProductionComponent} from "../production/production.component";
import {ConstructionComponent} from "../construction/construction.component";
import {ScrollHeaderService} from "../../../../Shared/Core/scroll-header.service";
import {ScrollSpyDirective} from "../../../Core/scroll-spy.directive";

@Component({
  selector: 'app-competencies',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DevelopmentsComponent,
    PhysicsComponent,
    DesignComponent,
    GoalComponent,
    ProductionComponent,
    ConstructionComponent,
    ScrollSpyDirective,
  ],
  templateUrl: './competencies.component.html',
  styleUrl: './competencies.component.scss'
})
export class CompetenciesComponent {
  public scrollService = inject(ScrollHeaderService);

}
