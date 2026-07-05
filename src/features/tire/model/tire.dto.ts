import type { TireStatus, TireType } from '@entities/tire';

export interface CreateTireDto {
  brand: string;
  model: string;
  type: TireType;
  width: number;
  aspectRatio: number;
  rimDiameter: number;
  price?: number;
  storageLocation?: string;
  mileageAtPurchase?: number;
  quantity?: number;
  purchaseAt?: string;
}

export interface UpdateTireDto extends Partial<CreateTireDto> {
  status?: TireStatus;
}
