import {inject, Injectable} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScrollHeaderService {

  private router = inject(Router);
  private stickyElementHeight = 62;

  public setStickyElementHeight(height: number): void {
    this.stickyElementHeight = height;
  }

  public scrollToElement(elementId: string): void {
     const element = document.getElementById(elementId);
     if (element){
       const y = element.getBoundingClientRect().top + window.pageYOffset - 50;
       window.scrollTo({top: y, behavior: "smooth"});
     }
  }

  public navigateToAndScroll(elementId: string): void {
    this.scrollToElement(elementId);
  }
}
