import type {
  DocumentType,
  ExpenseCategory,
  PurchaseFrom,
  ServiceCategory,
  TimelineEvent,
  TripPurpose,
} from '@entities/timeline';
import type { FuelType } from '@entities/vehicle';

import type { TFunction } from 'i18next';

export const getEventDetailsLabel = (event: TimelineEvent, t: TFunction): string | null => {
  const { type, details } = event;

  if (!details) return null;

  switch (type) {
    case 'REFUEL': {
      const d = details as {
        liters: string;
        pricePerLiter: string;
        fuelType: FuelType;
        isFullTank: boolean;
      };
      const parts = [
        `${d.liters} ${t('units.liters')}`,
        `${d.pricePerLiter} ${t('enums.currencyShort.PLN')}/${t('units.liters')}`,
        t(`enums.fuelType.${d.fuelType}`),
        d.isFullTank ? t('timeline.fields.isFullTank') : null,
      ].filter(Boolean);
      return parts.join(' • ');
    }

    case 'CHARGE': {
      const d = details as {
        kWh: string;
        chargeType: string;
        batteryBefore: number | null;
        batteryAfter: number | null;
      };
      const parts = [
        `${d.kWh} ${t('units.kwh')}`,
        d.chargeType,
        d.batteryBefore != null && d.batteryAfter != null
          ? `${d.batteryBefore}% → ${d.batteryAfter}%`
          : null,
      ].filter(Boolean);
      return parts.join(' • ');
    }

    case 'SERVICE': {
      const d = details as { category: ServiceCategory; works: unknown[]; parts: unknown[] };
      const parts = [
        t(`enums.serviceCategory.${d.category}`),
        d.works?.length ? `${d.works.length} ${t('timeline.labels.works')}` : null,
        d.parts?.length ? `${d.parts.length} ${t('timeline.labels.parts')}` : null,
      ].filter(Boolean);
      return parts.join(' • ');
    }

    case 'DOCUMENT': {
      const d = details as { documentType: DocumentType; expireDate: string | null };
      const parts = [
        t(`enums.documentType.${d.documentType}`),
        d.expireDate ? `${t('fields.expireDate')}: ${d.expireDate.split('T')[0]}` : null,
      ].filter(Boolean);
      return parts.join(' • ');
    }

    case 'EXPENSE': {
      const d = details as { expenseCategory: ExpenseCategory };
      return t(`enums.expenseCategory.${d.expenseCategory}`);
    }

    case 'TRIP': {
      const d = details as {
        distanceKm: string;
        purpose: TripPurpose;
        startLocation: string | null;
        endLocation: string | null;
      };
      const parts = [
        `${d.distanceKm} ${t('units.km')}`,
        t(`enums.tripPurpose.${d.purpose}`),
        d.startLocation && d.endLocation ? `${d.startLocation} → ${d.endLocation}` : null,
      ].filter(Boolean);
      return parts.join(' • ');
    }

    case 'PURCHASE': {
      const d = details as { purchasedFrom: PurchaseFrom; country: string | null };
      const parts = [t(`enums.purchaseFrom.${d.purchasedFrom}`), d.country ?? null].filter(Boolean);
      return parts.join(' • ');
    }

    case 'SALE': {
      const d = details as { soldTo: PurchaseFrom };
      return t(`enums.purchaseFrom.${d.soldTo}`);
    }

    default:
      return null;
  }
};
