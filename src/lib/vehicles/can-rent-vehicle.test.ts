import { describe, expect, it } from "vitest";
import { canRentVehicle } from "./can-rent-vehicle";
import type { Vehicle } from "@/types/vehicle";

describe("canRentVehicle", () => {
  it("deve permitir alugar um veículo disponível", () => {
    const vehicle: Vehicle = {
      id: "1",
      plate: "ABC1D23",
      brand: "Chevrolet",
      model: "Onix",
      year: 2023,
      color: "Prata",
      mileage: 45000,
      status: "AVAILABLE",
    };

    const result = canRentVehicle(vehicle);

    expect(result).toBe(true);
  });

  it("não deve permitir alugar um veículo já alugado", () => {
    const vehicle: Vehicle = {
      id: "2",
      plate: "ASC123",
      brand: "Chevrolet",
      model: "Prisma",
      year: 2021,
      color: "Preto",
      mileage: 72000,
      status: "RENTED",
    };

    const result = canRentVehicle(vehicle);
    expect(result).toBe(false);
  });

  it("não deve permitir alugar um veículo em manutenção", () => {
    const vehicle: Vehicle = {
      id: "3",
      plate: "ABC2D52",
      brand: "Renault",
      model: "Kwid",
      year: 2024,
      color: "Preto",
      mileage: 170000,
      status: "MAINTENANCE",
    };

    const result = canRentVehicle(vehicle);
    expect(result).toBe(false);
  });
});
