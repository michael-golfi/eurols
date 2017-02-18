import { Pipe, PipeTransform, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { Forklift } from './forklift';

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
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscribe = this.route.params.subscribe(params => {
      this.serialNumber = +params["serialNumber"];

      // Load details for page
    });

    this.lift = {
      make: "Toyota",
      model: "7FGu25",
      year: 2000,
      serialNumber: 65186,
      type: "Propane",

      purchased: {
        purchaseDate: new Date(2004, 8, 3),
        purchasePrice: 15200.00,
        purchasedFrom: "N/A",
      },

      specifications: {
        approximateLoweredHeight: 0,
        approximateMaxHeight: 0,
        approximateWidth: 0,
        approximateLength: 0,
        capacity: 5000,
        mastStage: 3,
      }
    }
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
