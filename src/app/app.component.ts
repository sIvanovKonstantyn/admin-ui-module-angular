import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-ui';
  currentTab: string;

  onCurrentStateClick(event: MouseEvent) {
    this.currentTab = 'CurrentState';
  }

  onMonitoringClick($event: MouseEvent) {
    this.currentTab = 'Monitoring';
  }

  onTroublesClick($event: MouseEvent) {
    this.currentTab = 'Troubles';
  }

  onUsersClick($event: MouseEvent) {
    this.currentTab = 'Users';
  }

  onPropertiesClick($event: MouseEvent) {
    this.currentTab = 'Properties';
  }

  onInfoClick($event: MouseEvent) {
    this.currentTab = 'Info';
  }
}
