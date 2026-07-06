import type { TitleContext } from './types';
import type { TFunction } from 'i18next';

const fmt = (value: number, decimals = 2) => parseFloat(value.toFixed(decimals));

export const generateEventTitle = (t: TFunction, ctx: Partial<TitleContext>): string => {
  switch (ctx.type) {
    case 'REFUEL': {
      const parts = [t('enums.timelineType.REFUEL')];
      if (ctx.fuelType) parts.push(t(`enums.fuelType.${ctx.fuelType}` as never));
      if (ctx.liters != null) parts.push(`· ${ctx.liters} l`);
      if (ctx.cost != null) parts.push(`· ${fmt(ctx.cost)} PLN`);
      if (ctx.isFullTank) parts.push(`· ${t('timeline.fields.isFullTank')}`);
      return parts.join(' ');
    }

    case 'CHARGE': {
      const parts = [t('enums.timelineType.CHARGE')];
      if (ctx.chargeType) parts.push(t(`enums.chargeType.${ctx.chargeType}` as never));
      if (ctx.chargerNetwork) parts.push(`· ${ctx.chargerNetwork}`);
      if (ctx.kWh != null) parts.push(`· ${ctx.kWh} kWh`);
      if (ctx.batteryAfter != null) parts.push(`· ${ctx.batteryAfter}%`);
      if (ctx.cost != null) parts.push(`· ${fmt(ctx.cost)} PLN`);
      return parts.join(' ');
    }

    case 'SERVICE': {
      const parts = [
        ctx.serviceCategory
          ? t(`enums.serviceCategory.${ctx.serviceCategory}` as never)
          : t('enums.timelineType.SERVICE'),
      ];
      if (ctx.cost != null) parts.push(`· ${fmt(ctx.cost)} PLN`);
      return parts.join(' ');
    }

    case 'DOCUMENT': {
      const parts = [
        ctx.documentType
          ? t(`enums.documentType.${ctx.documentType}` as never)
          : t('enums.timelineType.DOCUMENT'),
      ];
      if (ctx.expireDate) {
        const date = new Date(ctx.expireDate);
        if (!isNaN(date.getTime())) {
          const month = String(date.getMonth() + 1).padStart(2, '0');
          parts.push(`· do ${month}.${date.getFullYear()}`);
        }
      }
      if (ctx.cost != null) parts.push(`· ${fmt(ctx.cost)} PLN`);
      return parts.join(' ');
    }

    case 'EXPENSE': {
      const parts = [
        ctx.expenseCategory
          ? t(`enums.expenseCategory.${ctx.expenseCategory}` as never)
          : t('enums.timelineType.EXPENSE'),
      ];
      if (ctx.cost != null) parts.push(`· ${fmt(ctx.cost)} PLN`);
      return parts.join(' ');
    }

    case 'TRIP': {
      if (ctx.startLocation && ctx.endLocation) {
        const parts = [`${ctx.startLocation} → ${ctx.endLocation}`];
        if (ctx.distanceKm != null) parts.push(`· ${ctx.distanceKm} km`);
        return parts.join(' ');
      }
      const parts = [
        ctx.purpose ? t(`enums.tripPurpose.${ctx.purpose}` as never) : t('enums.timelineType.TRIP'),
      ];
      if (ctx.distanceKm != null) parts.push(`· ${ctx.distanceKm} km`);
      return parts.join(' ');
    }

    case 'PURCHASE': {
      const parts = [t('enums.timelineType.PURCHASE')];
      if (ctx.purchasedFrom)
        parts.push(`· ${t(`enums.purchaseFrom.${ctx.purchasedFrom}` as never)}`);
      if (ctx.cost != null) parts.push(`· ${fmt(ctx.cost)} PLN`);
      return parts.join(' ');
    }

    case 'SALE': {
      const parts = [t('enums.timelineType.SALE')];
      if (ctx.soldTo) parts.push(`· ${t(`enums.purchaseFrom.${ctx.soldTo}` as never)}`);
      if (ctx.cost != null) parts.push(`· ${fmt(ctx.cost)} PLN`);
      return parts.join(' ');
    }

    case 'TIRE_CHANGE': {
      const parts = [
        ctx.changeType
          ? t(`enums.tireChangeType.${ctx.changeType}` as never)
          : t('enums.timelineType.TIRE_CHANGE'),
      ];
      if (ctx.tireLabel) parts.push(`· ${ctx.tireLabel}`);
      return parts.join(' ');
    }

    default:
      return '';
  }
};
