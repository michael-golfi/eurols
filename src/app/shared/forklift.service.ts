import { Injectable } from '@angular/core';
import { Forklift } from './types/forklift';

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

  forklifts: Forklift[] = [
    {
      make: "Toyota",
      model: "7FGU25",
      year: 2000,
      serialNumber: 65186,
      type: "Propane",
      available: true,
      tires: {
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
      },
      purchased: {
        purchaseDate: new Date(2004,
          8,
          3),
        purchasePrice: 15200,
        purchasedFrom: "N/A"
      },
      specifications: {
        approximateLoweredHeight: 0,
        approximateMaxHeight: 0,
        approximateWidth: 0,
        approximateLength: 0,
        capacity: 5000,
        mastStage: 3
      }
    },
    {
      make: "Toyota",
      model: "7FGU25",
      year: 2000,
      serialNumber: 65186,
      type: "Propane",
      available: true,
      tires: {
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
      },
      purchased: {
        purchaseDate: new Date(2004,
          8,
          3),
        purchasePrice: 15200,
        purchasedFrom: "N/A"
      },
      specifications: {
        approximateLoweredHeight: 0,
        approximateMaxHeight: 0,
        approximateWidth: 0,
        approximateLength: 0,
        capacity: 5000,
        mastStage: 3
      }
    },
    {
      make: "Toyota",
      model: "7FGU25",
      year: 2000,
      serialNumber: 65186,
      type: "Propane",
      available: true,
      tires: {
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
      },
      purchased: {
        purchaseDate: new Date(2004,
          8,
          3),
        purchasePrice: 15200,
        purchasedFrom: "N/A"
      },
      specifications: {
        approximateLoweredHeight: 0,
        approximateMaxHeight: 0,
        approximateWidth: 0,
        approximateLength: 0,
        capacity: 5000,
        mastStage: 3
      }
    },
    {
      make: "Toyota",
      model: "7FGU25",
      year: 2000,
      serialNumber: 65186,
      type: "Propane",
      available: true,
      tires: {
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
      },
      purchased: {
        purchaseDate: new Date(2004,
          8,
          3),
        purchasePrice: 15200,
        purchasedFrom: "N/A"
      },
      specifications: {
        approximateLoweredHeight: 0,
        approximateMaxHeight: 0,
        approximateWidth: 0,
        approximateLength: 0,
        capacity: 5000,
        mastStage: 3
      }
    },
    {
      make: "Toyota",
      model: "7FGU25",
      year: 2000,
      serialNumber: 65186,
      type: "Propane",
      available: true,
      tires: {
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
      },
      purchased: {
        purchaseDate: new Date(2004,
          8,
          3),
        purchasePrice: 15200,
        purchasedFrom: "N/A"
      },
      specifications: {
        approximateLoweredHeight: 0,
        approximateMaxHeight: 0,
        approximateWidth: 0,
        approximateLength: 0,
        capacity: 5000,
        mastStage: 3
      }
    },
    {
      make: "Toyota",
      model: "7FGU25",
      year: 2000,
      serialNumber: 65186,
      type: "Propane",
      available: true,
      tires: {
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
      },
      purchased: {
        purchaseDate: new Date(2004,
          8,
          3),
        purchasePrice: 15200,
        purchasedFrom: "N/A"
      },
      specifications: {
        approximateLoweredHeight: 0,
        approximateMaxHeight: 0,
        approximateWidth: 0,
        approximateLength: 0,
        capacity: 5000,
        mastStage: 3
      }
    },
    {
      make: "Toyota",
      model: "7FGU25",
      year: 2000,
      serialNumber: 65186,
      type: "Propane",
      available: true,
      tires: {
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
      },
      purchased: {
        purchaseDate: new Date(2004,
          8,
          3),
        purchasePrice: 15200,
        purchasedFrom: "N/A"
      },
      specifications: {
        approximateLoweredHeight: 0,
        approximateMaxHeight: 0,
        approximateWidth: 0,
        approximateLength: 0,
        capacity: 5000,
        mastStage: 3
      }
    },
    {
      make: "Toyota",
      model: "7FGU25",
      year: 2000,
      serialNumber: 65186,
      type: "Propane",
      available: true,
      tires: {
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
      },
      purchased: {
        purchaseDate: new Date(2004,
          8,
          3),
        purchasePrice: 15200,
        purchasedFrom: "N/A"
      },
      specifications: {
        approximateLoweredHeight: 0,
        approximateMaxHeight: 0,
        approximateWidth: 0,
        approximateLength: 0,
        capacity: 5000,
        mastStage: 3
      }
    }
  ];
}
