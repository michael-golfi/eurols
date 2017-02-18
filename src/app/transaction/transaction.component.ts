import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FuseOptions } from 'fuse.js';
import * as Fuse from 'fuse.js';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { Subject } from 'rxjs/Subject';
import { Transaction } from './transaction.d';

@Component({
  selector: 'app-transaction',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './worklist.component.css',
    './style/icons.css',
    './style/material.scss'
  ],
  
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
        [rows]="transactions | async"
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

export class TransactionComponent implements OnInit {
  private filterStream = new Subject<string>();
  transactions: Observable<Transaction[]>;

  options: Fuse.FuseOptions = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    keys: [
      "company",
      "date",
      "amount"
    ]
  };

  columns = [
    { prop: 'company' },
    { prop: 'date' },
    { prop: 'amount' }
  ];

  constructor() { }

  ngOnInit() { }

  ngAfterContentInit() {
    let data = this.fetch();

    this.transactions = Observable.merge(
      Observable.of(data),
      this.filterStream
        .debounceTime(300)
        .distinctUntilChanged()
        .map((term: string) => term.length > 0 ? new Fuse(data, this.options).search(term) : data)
    );
  }

  filter = (query: string) => this.filterStream.next(query);

  fetch(): Transaction[] {
    var options = {
      weekday: "long", year: "numeric", month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    let date = new Date();

    return [
      { company: 'Swimlane', date: date.toLocaleTimeString("en-us", options), amount: 500 },
      { company: 'KFC', date: date.toLocaleTimeString("en-us", options), amount: 500 },
      { company: 'Burger King', date: date.toLocaleTimeString("en-us", options), amount: 500 },
      { company: 'Swimlane', date: date.toLocaleTimeString("en-us", options), amount: 500 },
      { company: 'KFC', date: date.toLocaleTimeString("en-us", options), amount: 500 },
      { company: 'Burger King', date: date.toLocaleTimeString("en-us", options), amount: 500 },
      { company: 'Swimlane', date: date.toLocaleTimeString("en-us", options), amount: 500 },
      { company: 'KFC', date: date.toLocaleTimeString("en-us", options), amount: 500 },
      { company: 'Burger King', date: date.toLocaleTimeString("en-us", options), amount: 500 },
      { company: 'Swimlane', date: date.toLocaleTimeString("en-us", options), amount: 500 },
      { company: 'KFC', date: date.toLocaleTimeString("en-us", options), amount: 500 },
      { company: 'Burger King', date: date.toLocaleTimeString("en-us", options), amount: 500 },
      { company: 'Swimlane', date: date.toLocaleTimeString("en-us", options), amount: 500 },
      { company: 'KFC', date: date.toLocaleTimeString("en-us", options), amount: 500 },
      { company: 'Burger King', date: date.toLocaleTimeString("en-us", options), amount: 500 },
    ];
  }
}