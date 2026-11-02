export type Vehicle = {
    id: string,
    plate: string;
    brand: string;
    model: string;
    year: number;
    color: string;
    mileage: number;
    status: VehicleStatus;
}

export type VehicleStatus = "AVAILABLE" | "RENTED" | "MAINTENANCE";