import {Directive, ElementRef, inject, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAppearOnScroll]',
  standalone: true
})
export class AppearOnScrollDirective {
  private observer!: IntersectionObserver;
  private lastScrollTop: number = 0;

  private el = inject(ElementRef)
  private renderer = inject(Renderer2)

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'appear');
        } else {
          const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
          if (currentScrollTop > this.lastScrollTop) {
            // Scrolling down
            this.renderer.addClass(this.el.nativeElement, 'appear');
          } else {
            // Scrolling up
            this.renderer.removeClass(this.el.nativeElement, 'appear');
          }
          this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
        }
      });
    });

    this.observer.observe(this.el.nativeElement);
  }

}
