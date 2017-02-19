import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs/Subject';

import { ActivatedRoute, Router } from '@angular/router';

import { Forklift, Color, TireType } from '../shared/types/forklift';
import { ForkliftService } from '../shared/forklift.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: []
})

export class SearchComponent {
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
    this.forklifts = this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .map((term: string) => this.forkliftService.getForklifts());
  }

  ngAfterViewInit() {
    this.query = this.route.snapshot.queryParams['q'];
    this.search(this.query);
  }

  getAvailableColor = (serialNumber) => this.forkliftService.isAvailable(serialNumber) ? "green" : "red";
}