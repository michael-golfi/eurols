import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FuseOptions } from 'fuse.js';
import * as Fuse from 'fuse.js';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs/Subject';
import { Person } from './person';

@Component({
  selector: 'app-worklist',
  styleUrls: [
    './worklist.component.css',
    './style/icons.css',
    './style/material.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  template: `   
    <div class="container-fluid">

      <md-card>
        <md-card-header>
          <md-input-container class="search">
            <input md-input #term placeholder="Search In Any Column" (keyup)="filter(term.value)">
          </md-input-container>
        </md-card-header>
      </md-card>

      <ngx-datatable
        class="material"
        [rows]="rows | async"
        [columns]="columns"
        [columnMode]="'force'"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="'auto'"
        [limit]="10">
      </ngx-datatable>
    </div>
  `
})

export class WorklistComponent implements OnInit {
  private filterStream = new Subject<string>();
  rows: Observable<Person[]>;

  options: Fuse.FuseOptions = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    keys: [
      "name",
      "gender",
      "company"
    ]
  };

  columns = [
    { prop: 'name' },
    { prop: 'gender' },
    { prop: 'company' }
  ];

  constructor() { }

  ngOnInit() { }

  ngAfterContentInit() {
    let data = this.fetch();

    this.rows = Observable.merge(
      Observable.of(data),
      this.filterStream
        .debounceTime(300)
        .distinctUntilChanged()
        .map((term: string) => term.length > 0 ? new Fuse(data, this.options).search(term) : data)
    );
  }

  filter = (query: string) => this.filterStream.next(query);

  fetch(): Person[] {
    return [
      { name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { name: 'Dany', gender: 'Male', company: 'KFC' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { name: 'Dany', gender: 'Male', company: 'KFC' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { name: 'Dany', gender: 'Male', company: 'KFC' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { name: 'Dany', gender: 'Male', company: 'KFC' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { name: 'Dany', gender: 'Male', company: 'KFC' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
    ];
  }
}