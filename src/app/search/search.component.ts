import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs/Subject';

import { SearchService } from './search.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})

export class SearchComponent {
  private searchTermStream = new Subject<string>();

  results: Observable<string[]>;
  query: string;

  facets = [
    { "name": "Brand", "options": ["Honda", "Toyota"] },
    { "name": "Capacity", "options": ["5 Tons", "10 Tons"] },
    { "name": "Power Source", "options": ["Internal Combustion", "Electric"] },
    { "name": "Form Factor", "options": ["Manual", "Fork Lift", "Pallet Jack", "Stacker", "Reach Truck", "Order Picker", "Tow Tracker", "Container Handler", "Tug Cart"] },
    { "name": "Tires", "options": ["Cushion", "Pneumatic"] }
  ];

  constructQuery(query: String, ) {

  };

  constructor(private wikipediaService: SearchService, private route: ActivatedRoute, private router: Router) { }

  search = (query: string) => this.searchTermStream.next(query);

  ngOnInit() {
    this.results = this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term: string) => this.wikipediaService.search(term));
  }

  ngAfterViewInit() {
    this.query = this.route.snapshot.queryParams['q'];
    this.search(this.query);
  }
}