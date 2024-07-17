import { Routes } from '@angular/router';
import {HeaderComponent} from "./Shared/Ui/header/header/header.component";
import {UnitBodyComponent} from "./Body/UI/unit-body/unit-body.component";

export const routes: Routes = [
  {path: '', component: UnitBodyComponent},
];
