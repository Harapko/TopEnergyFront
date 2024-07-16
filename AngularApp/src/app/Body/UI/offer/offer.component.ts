import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {ErrorStateMatcher} from "@angular/material/core";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIcon} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";

interface ItemList {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIcon
  ],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss'
})
export class OfferComponent {

  states: ItemList[] = [
    {value: 'ZAK', viewValue: 'Закарпатська'},
    {value: 'KY', viewValue: 'Київська'},
  ];

  countries: ItemList[] = [
    {value: 'UK', viewValue: 'Україна'},
    {value: 'BG', viewValue: 'Болгарія'},
  ]

  coolants: ItemList[] = [
    {value: 'UK', viewValue: 'Повітря'},
    {value: 'UK', viewValue: 'Пар'},
  ]

  fuels: ItemList[] = [
    {value: 'UK', viewValue: 'Лушпиння'},
    {value: 'UK', viewValue: 'Сіно'},

  ]


}








