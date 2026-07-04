export const MEDIA_CATEGORIES = {
  EXTERIOR: 'EXTERIOR',
  INTERIOR: 'INTERIOR',
  ENGINE: 'ENGINE',
  DAMAGE: 'DAMAGE',
  OTHER: 'OTHER',
} as const;

export type MediaCategory = (typeof MEDIA_CATEGORIES)[keyof typeof MEDIA_CATEGORIES];

export const MEDIA_TYPES = {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
} as const;

export type MediaType = (typeof MEDIA_TYPES)[keyof typeof MEDIA_TYPES];

export const MEDIA_VARIANT_TYPES = {
  ORIGINAL: 'ORIGINAL',
  LARGE: 'LARGE',
  MEDIUM: 'MEDIUM',
  SMALL: 'SMALL',
  THUMBNAIL: 'THUMBNAIL',
} as const;

export type MediaVariantType = (typeof MEDIA_VARIANT_TYPES)[keyof typeof MEDIA_VARIANT_TYPES];
