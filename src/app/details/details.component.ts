import { Pipe, PipeTransform, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { Forklift, Color, TireType } from '../shared/types/forklift';
import { ForkliftService } from '../shared/forklift.service';

@Pipe({ name: 'default' })
export class DefaultPipe implements PipeTransform {
  transform(input: number | string) {
    if (!input)
      return "N/A";
    return input;
  }
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  serialNumber: number;
  lift: Forklift;

  private subscribe: Subscription;

  constructor(private forkliftService: ForkliftService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscribe = this.route.params.subscribe(params => {
      this.serialNumber = +params["serialNumber"];
      this.lift = this.forkliftService.getForklift(this.serialNumber);
    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  getAvailableColor = () => (this.lift.available) ? "green" : "red";
  toggleAvailability = () => this.lift.available = !this.lift.available;
}
