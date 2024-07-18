import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ScrollHeaderService} from "../../../Shared/Core/scroll-header.service";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  test: any;
  public scrollService = inject(ScrollHeaderService);

  ngOnInit(){
    this.appearsElement();
  }

  private appearsElement(){
    let competencies__title = document.getElementById('container');
    window.addEventListener('scroll',()=>{
      let y = window.scrollY;
      if (competencies__title){
        this.test = competencies__title.getBoundingClientRect();
        if (y >= 200){
        }
        else {
        }
      }
    })

  }

  protected readonly window = window;
}
