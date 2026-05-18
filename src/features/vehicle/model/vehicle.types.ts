// DTOs

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
  fuelType: string;
  transmission: string;
  driveType: string;
  color: string;
  currentMileage?: number;
  description?: string;
  countryOfOrigin?: string;
}

// Params

export interface CreateVehicleParams {
  workspaceId: string;
  dto: CreateVehicleDto;
}
