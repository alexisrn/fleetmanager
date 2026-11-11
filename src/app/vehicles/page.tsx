
"use client";

import { useState } from "react";
import type { Vehicle, VehicleStatus } from "@/types/vehicle";
import { VehicleCard } from "@/components/vehicles/vehicle-card";




const vehicles: Vehicle[] = [
  {
    id: "1",
    plate: "ABC1D23",
    brand: "Chevrolet",
    model: "Onix",
    year: 2023,
    color: "Prata",
    mileage: 45000,
    status: "AVAILABLE",
  },
    {
    id: "2",
    plate: "DEF4G56",
    brand: "Renault",
    model: "Kwid",
    year: 2022,
    color: "Branco",
    mileage: 72000,
    status: "RENTED",
  },
  {
    id: "3",
    plate: "GHI7J89",
    brand: "Fiat",
    model: "Mobi",
    year: 2024,
    color: "Preto",
    mileage: 18000,
    status: "MAINTENANCE",
  },

];


type VehicleFilter = VehicleStatus | "ALL";

const buttons: {
  id: number;
  name: string;
  value: VehicleFilter;
}[] = [
  { id: 1, name: "Todos", value: "ALL"},
  { id: 2, name: "Disponiveis", value: "AVAILABLE" },
  { id: 3, name: "Alugados", value: "RENTED" },
  { id: 4, name: "Manutenção", value: "MAINTENANCE" },
];




export default function VehiclesPage() {

const [selectedStatus, setSelectedStatus] = useState<VehicleFilter>("ALL");

const filteredVehicles = vehicles.filter((vehicle) => {
  return selectedStatus === "ALL" || vehicle.status === selectedStatus;
});

  return (
    <main className="bg-[#2b2746] text-white min-h-screen p-3">
      <h1 className="text-xl mb-1">Gestão de veículos</h1>
      <p className="text-[14px] mb-5  text-gray-400">Gerencie os veículos da frota</p>

    <div className="flex flex-wrap gap-2 mb-2" >
        {buttons.map((bt) => (
  <button
  onClick={() => setSelectedStatus(bt.value)}
    key={bt.id}
    type="button"
    className={
  selectedStatus === bt.value
    ? "bg-violet-600 rounded-xl p-2 text-xs cursor-pointer"
    : "bg-[#484274] rounded-xl p-2 text-xs cursor-pointer"
    
}
aria-pressed={selectedStatus === bt.value}
  >
    {bt.name}
  </button>
))}

    </div>
    <p className="mb-4 text-sm">
  Filtro: {selectedStatus} |
  Encontrados: {filteredVehicles.length}
</p>


    <div className="flex flex-col gap-3">
      {filteredVehicles.map((vehicle) => (
       <VehicleCard vehicle={vehicle} key={vehicle.id} />
        ))}
    </div>
    </main>
  );
}