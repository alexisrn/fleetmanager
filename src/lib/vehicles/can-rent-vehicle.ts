    import type { Vehicle } from "@/types/vehicle"

    export function canRentVehicle(vehicle: Vehicle): boolean {
        return vehicle.status === "AVAILABLE";
    }