import {Component, inject} from '@angular/core';
import {ScrollHeaderService} from "../../../Core/scroll-header.service";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  private scrollService = inject(ScrollHeaderService);

  public scrollTo(elementId: string) : void {
    this.scrollService.navigateToAndScroll(elementId);
  }
}
