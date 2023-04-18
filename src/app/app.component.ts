import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  opened: boolean = false;

  eventHandler() {
    return false;
  }

  openSideBar(shouldOpen: boolean) {
    this.opened = shouldOpen;
  }
}
