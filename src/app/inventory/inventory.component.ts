import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs/Subject';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { Forklift, Color, TireType } from '../shared/types/forklift';
import { ForkliftService } from '../shared/forklift.service';

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  providers: []
})

export class InventoryComponent {
  private searchTermStream = new Subject<string>();

  forklifts: Observable<Forklift[]>;
  query: string;

  facets = [
    { "name": "Available", "options": ["Yes", "No"] },
    { "name": "Brand", "options": ["Toyota", "Crown", "Raymond", "Hyster", "Yale", "BT", "Nissan", "PMX"] },
    { "name": "Capacity", "options": ["3000 Ibs", "5000 Ibs", "10,000 Ibs", "15,000 Ibs", "20,000 Ibs", "25,000 Ibs"] },
    { "name": "Power Source", "options": ["Internal Combustion", "Electric"] },
    { "name": "Form Factor", "options": ["Manual", "Fork Lift", "Pallet Jack", "Stacker", "Reach Truck", "Order Picker", "Tow Tracker", "Container Handler", "Tug Cart"] },
    { "name": "Tires", "options": ["Cushion", "Pneumatic"] }
  ];

  constructor(private forkliftService: ForkliftService, private route: ActivatedRoute, private router: Router) { }

  search = (query: string) => this.searchTermStream.next(query);

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.query = params['q'];
      this.searchTermStream.next(this.query);
    });

    this.forklifts = this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .map((term: string) => this.forkliftService.getForklifts());
  }

  getAvailableColor = (serialNumber) => this.forkliftService.isAvailable(serialNumber) ? "#81C784" : "#E57373";
}