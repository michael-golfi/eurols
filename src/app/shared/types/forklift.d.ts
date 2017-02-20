export interface Forklift {
    make: string;
    model: string;
    year?: number;
    serialNumber: number;
    type: string;

    available: boolean;

    tires: Tire,

    purchased: PurchaseDetails;
    specifications: Specifications;
    history: Repair[];
}

interface TireSize {
    outsideDiameter: number;
    width: number;
    insideDiameter: number;
}

interface Tire {
    frontSize: TireSize;
    backSize: TireSize;
    type: TireType;
    color: Color;
}

export type Color =
    "Black"
    | "White"
    | "Grey"
    | "Green";

export type TireType =
    "Cushion Smooth"
    | "Cushion Traction"
    | "Pneumatic Solid"
    | "Pneumatic Air"
    | "Polyurathane";

interface PurchaseDetails {
    purchaseDate?: Date;
    purchasePrice: number;
    purchasedFrom?: string;
}

interface Specifications {
    approximateLoweredHeight?: number;
    approximateMaxHeight?: number;
    approximateWidth?: number;
    approximateLength?: number;
    capacity: number;
    mastStage: number;
}

interface Repair {
    title: string;
    date: Date;
    hours: number;
    description: string;
}

interface Maintenance {
    title: string;
    date: Date;
    hours: number;
    description: string;
}
