export interface CreateVehicleDto {
  brand: string;
  model: string;
  year: number;
  generation?: string;
  nickname?: string;
  vin?: string;
  plateNumber: string;
  engineDisplacementCc: number;
  bodyType: string;
  fuelType: string[];
  transmission: string;
  driveType: string;
  color: string;
  currentMileage?: number;
  description?: string;
  countryOfOrigin?: string;
}

export type UpdateVehicleDto = Partial<CreateVehicleDto>;
