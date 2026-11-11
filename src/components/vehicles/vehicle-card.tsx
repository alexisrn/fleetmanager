
import type { Vehicle, VehicleStatus } from "@/types/vehicle";

type VehicleCardProps = {
  vehicle: Vehicle;
};
const statusLabels: Record<VehicleStatus, string> = {
  AVAILABLE: "Disponível",
  RENTED: "Alugado",
  MAINTENANCE: "Em manutenção",
};

const statusColors: Record<VehicleStatus, string> = {
  AVAILABLE: "bg-green-600",
  RENTED: "bg-amber-600",
  MAINTENANCE: "bg-gray-600",
};

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
   
  <div className="bg-indigo-900 rounded-xl p-4">
    <p className="font-semibold text-lg">
      {vehicle.brand} {vehicle.model}
    </p>

    <p className="text-sm text-gray-300 mb-3">
      {vehicle.plate}
    </p>

    <p
      className={`${statusColors[vehicle.status]} w-fit rounded-full px-3 py-1 text-xs text-white`}
    >
      {statusLabels[vehicle.status]}
    </p>
  </div>

  );
}