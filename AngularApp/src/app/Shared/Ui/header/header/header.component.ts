import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForOf, NgOptimizedImage, NgStyle} from "@angular/common";

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

export class HeaderComponent implements OnInit {

  flags = [
    { value: 'Uk', name: 'Uk', img: 'assets/icon/ukraine-flag-icon.svg' },
    { value: 'En', name: 'En', img: 'assets/banana.png' },
    /*{ value: 'cherry', name: 'Cherry', img: 'assets/cherry.png' }*/
  ];

  selectedImage: string = '';

  ngOnInit(){
    this.setInitialBackground();
  }
  setInitialBackground() {
    const initialOption = this.flags[0];
    this.selectedImage = initialOption.img;
  }

  updateBackground(selectElem: HTMLSelectElement) {
    const selectedOption = selectElem.options[selectElem.selectedIndex];
    const imgURL = this.flags.find(item => item.value === selectedOption.value)?.img;
    this.selectedImage = imgURL || '';
  }
}
