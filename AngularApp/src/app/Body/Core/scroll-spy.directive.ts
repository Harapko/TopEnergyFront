import {Directive, ElementRef, HostListener, inject, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appScrollSpy]',
  standalone: true
})
export class ScrollSpyDirective {

  private el = inject(ElementRef);
  private renderer = inject(Renderer2)
  @Input() offsetTop: number = 0.5;

  @HostListener('window:scroll', [])
  onWindowScroll() {


    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);



    if (rect.top <= windowHeight * this.offsetTop) {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(20px)');
    }
  }

}
