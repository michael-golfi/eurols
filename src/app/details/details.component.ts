import { Pipe, PipeTransform, Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { Forklift, Color, TireType, Repair } from '../shared/types/forklift';
import { ForkliftService } from '../shared/forklift.service';

import { DataTableColumnDirective } from '@swimlane/ngx-datatable';
import { IMdlTableModelItem, MdlDefaultTableModel } from 'angular2-mdl';


class SelectableHistoryItem implements IMdlTableModelItem {
  selected: boolean;
  title: string;
  date: string;
  hours: number;
  description: string;
}

@Pipe({ name: 'default' })
export class DefaultPipe implements PipeTransform {
  transform(input: number | string) {
    if (!input)
      return "N/A";
    return input;
  }
}

@Pipe({ name: 'history' })
export class HistoryPipe implements PipeTransform {
  transform(input: Repair[]) {
    let datePipe = new DatePipe("medium");
    return input.map((f) => <SelectableHistoryItem>{
      selected: false,
      title: f.title,
      hours: f.hours,
      date: datePipe.transform(f.date),
      description: f.description
    }) as [SelectableHistoryItem]
  }
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  serialNumber: number;
  forklift: Forklift;

  private subscribe: Subscription;

  historyModel = new MdlDefaultTableModel([
    { key: 'title', name: 'Title', sortable: true },
    { key: 'date', name: 'Date', sortable: true },
    { key: 'hours', name: 'Hours', sortable: true, numeric: true },
    { key: 'description', name: 'Description' },
  ]);

  constructor(private forkliftService: ForkliftService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscribe = this.route.params.subscribe(params => {
      // TODO - Fix input: this.serialNumber = +params["serialNumber"];
      this.serialNumber = 65186;
      this.forklift = this.forkliftService.getForklift(this.serialNumber);
      this.historyModel.addAll(new HistoryPipe().transform(this.forklift.history));
    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  getAvailableColor = () => (this.forklift.available) ? "#81C784" : "#E57373";
  toggleAvailability = () => this.forklift.available = !this.forklift.available;
}
