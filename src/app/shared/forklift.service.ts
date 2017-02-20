import { Injectable } from '@angular/core';
import { Forklift, Tire, PurchaseDetails, Specifications, Repair } from './types/forklift';

@Injectable()
export class ForkliftService {

  constructor() { }

  getForklift(serialNumber: number): Forklift {
    return this.forklifts.find(f => f.serialNumber == serialNumber);
  }

  getForklifts(): Forklift[] {
    return <Forklift[]>this.forklifts;
  }

  isAvailable = (serialNumber: number) => this.getForklift(serialNumber).available;

  tire: Tire = {
    frontSize: {
      outsideDiameter: 21,
      width: 7,
      insideDiameter: 15
    },
    backSize: {
      outsideDiameter: 21,
      width: 7,
      insideDiameter: 15
    },
    color: "White",
    type: "Pneumatic Solid"
  };

  purchased: PurchaseDetails = {
    purchaseDate: new Date(2004,
      8,
      3),
    purchasePrice: 15200,
    purchasedFrom: "N/A"
  };

  specs: Specifications = {
    approximateLoweredHeight: 0,
    approximateMaxHeight: 0,
    approximateWidth: 0,
    approximateLength: 0,
    capacity: 5000,
    mastStage: 3
  };

  repair: Repair[] = [{
    title: "Oil Change",
    date: new Date(2012, 3, 12),
    hours: 5,
    description: "Changed the oil"
  },
  {
    title: "Oil Filter",
    date: new Date(2012, 5, 12),
    hours: 2,
    description: "Changed the oil filter"
  },
  {
    title: "Front Tire Change",
    date: new Date(2012, 8, 12),
    hours: 3,
    description: "Pneumatic (White)"
  },
  {
    title: "Rear Tire Change",
    date: new Date(2012, 8, 14),
    hours: 4,
    description: "Pneumatic (White)"
  }];

  forklifts: Forklift[] = [
    {
      make: "Toyota",
      model: "7FGU25",
      year: 2000,
      serialNumber: 65186,
      type: "Propane",
      available: true,
      tires: this.tire,
      purchased: this.purchased,
      specifications: this.specs,
      history: this.repair
    },
    {
      make: "Toyota",
      model: "7FGU25",
      year: 2000,
      serialNumber: 65186,
      type: "Propane",
      available: true,
      tires: this.tire,
      purchased: this.purchased,
      specifications: this.specs,
      history: this.repair
    },
    {
      make: "Toyota",
      model: "7FGU25",
      year: 2000,
      serialNumber: 65186,
      type: "Propane",
      available: true,
      tires: this.tire,
      purchased: this.purchased,
      specifications: this.specs,
      history: this.repair
    },
    {
      make: "Toyota",
      model: "7FGU25",
      year: 2000,
      serialNumber: 65186,
      type: "Propane",
      available: true,
      tires: this.tire,
      purchased: this.purchased,
      specifications: this.specs,
      history: this.repair
    },
    {
      make: "Toyota",
      model: "7FGU25",
      year: 2000,
      serialNumber: 65186,
      type: "Propane",
      available: true,
      tires: this.tire,
      purchased: this.purchased,
      specifications: this.specs,
      history: this.repair
    },
    {
      make: "Toyota",
      model: "7FGU25",
      year: 2000,
      serialNumber: 65186,
      type: "Propane",
      available: true,
      tires: this.tire,
      purchased: this.purchased,
      specifications: this.specs,
      history: this.repair
    },
    {
      make: "Toyota",
      model: "7FGU25",
      year: 2000,
      serialNumber: 65186,
      type: "Propane",
      available: true,
      tires: this.tire,
      purchased: this.purchased,
      specifications: this.specs,
      history: this.repair
    },
    {
      make: "Toyota",
      model: "7FGU25",
      year: 2000,
      serialNumber: 65186,
      type: "Propane",
      available: true,
      tires: this.tire,
      purchased: this.purchased,
      specifications: this.specs,
      history: this.repair
    },
    {
      make: "Toyota",
      model: "7FGU25",
      year: 2000,
      serialNumber: 65186,
      type: "Propane",
      available: true,
      tires: this.tire,
      purchased: this.purchased,
      specifications: this.specs,
      history: this.repair
    }
  ];
}
