import {Component, OnInit} from '@angular/core';

export interface CurrentStateElement {
  stateName: string;
  elementsCount: number;
}

export interface ServiceAvailabilityElement {
  serviceName: string;
  available: boolean;
}

const MESSAGES_STATE_DATA: CurrentStateElement[] = [
  {stateName: 'created', elementsCount: 5},
  {stateName: 'on UPC', elementsCount: 2},
  {stateName: 'on B2', elementsCount: 10},
  {stateName: 'done', elementsCount: 20}
];

const SERVICE_AVAILABILITY_DATA: ServiceAvailabilityElement[] = [
  {serviceName: 'UPC', available: true},
  {serviceName: 'BPM Service', available: true},
  {serviceName: 'B2', available: false}
];

@Component({
  selector: 'app-currentstate',
  templateUrl: './current-state.component.html',
  styleUrls: ['./current-state.component.css']
})

export class CurrentStateComponent implements OnInit {

  dataSource = MESSAGES_STATE_DATA;
  availabilityDataSource = SERVICE_AVAILABILITY_DATA;

  constructor() {
  }

  ngOnInit() {
  }
}
