import { recipe } from '@vanilla-extract/recipes';

export const root = recipe({
  base: {
    width: '100%',
    minWidth: 0,
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
  variants: {
    direction: {
      horizontal: {
        overflowX: 'auto',
        overflowY: 'hidden',
        display: 'flex',
        flexDirection: 'row',
      },
      vertical: {
        overflowY: 'auto',
        overflowX: 'hidden',
      },
    },
  },
});
