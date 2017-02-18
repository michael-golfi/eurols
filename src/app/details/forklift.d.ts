export interface Forklift {
    make: string;
    model: string;
    year?: number;
    serialNumber: number;
    type: string;

    purchased: PurchaseDetails;
    specifications: Specifications;
    history?: Repair | Maintenance;
}

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