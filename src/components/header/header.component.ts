import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() openSideBar = new EventEmitter();
  @Input() sideBarStatus: boolean | undefined;

  _sideBarStatus: boolean | undefined = false;

  ngOnInit() {
    this._sideBarStatus = this.sideBarStatus;
  }

  emitOpenSideBar() {
    this._sideBarStatus = !this._sideBarStatus;
    this.openSideBar.emit(this._sideBarStatus);
  }
}
