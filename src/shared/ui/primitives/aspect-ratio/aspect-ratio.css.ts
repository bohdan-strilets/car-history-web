import { recipe } from '@vanilla-extract/recipes';

export const root = recipe({
  base: {
    width: '100%',
    display: 'block',
    position: 'relative',
  },

  variants: {
    ratio: {
      '16/9': { aspectRatio: '16 / 9' },
      '4/3': { aspectRatio: '4 / 3' },
      '3/2': { aspectRatio: '3 / 2' },
      '1/1': { aspectRatio: '1 / 1' },
    },
  },
});
