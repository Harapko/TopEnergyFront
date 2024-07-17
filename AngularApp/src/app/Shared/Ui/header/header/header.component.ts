import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {NgForOf, NgOptimizedImage, NgStyle} from "@angular/common";
import {ScrollHeaderService} from "../../../Core/scroll-header.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgStyle,
    NgOptimizedImage,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {


}
