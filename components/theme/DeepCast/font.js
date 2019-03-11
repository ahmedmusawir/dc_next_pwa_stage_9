const unit = 1;
const getFontSize = size => '' + size + 'rem';

const padding = '0rem';
// const lineHeight = '1.5rem';

// Font Theme
export default {
  // Fonts Families
  family: {
    primaryFontFamily: 'Montserrat, sans-serif',
    secondaryFontFamily: 'Open Sans, sans-serif',
  },
  //Fonts properties grouped
  groups: {
    xxl: {
      size: getFontSize(unit * 2.5),
      weight: '400',
      height: getFontSize(unit * 2.75),
      spacing: null,
      variant: null,
      style: null,
      transform: null,
      padding: padding,
    },
    xl: {
      size: getFontSize(unit * 2),
      weight: '400',
      height: getFontSize(unit * 2.5),
      spacing: null,
      variant: null,
      style: null,
      transform: null,
      padding: padding,
    },
    lg: {
      size: getFontSize(unit * 1.75),
      weight: '400',
      height: getFontSize(unit * 2.25),
      spacing: null,
      variant: null,
      style: null,
      transform: null,
      padding: padding,
    },
    md: {
      size: getFontSize(unit * 1.5),
      weight: 'normal',
      height: getFontSize(unit * 2),
      spacing: null,
      variant: null,
      style: null,
      transform: null,
      padding: padding,
    },
    sm: {
      size: getFontSize(unit * 1.25),
      weight: 'normal',
      height: getFontSize(unit * 1.5),
      spacing: null,
      variant: null,
      style: null,
      transform: null,
      padding: padding,
    },
    xs: {
      size: getFontSize(unit * 1),
      weight: 'normal',
      height: getFontSize(unit * 1.5),
      spacing: null,
      variant: null,
      style: null,
      transform: null,
      padding: padding,
    },
  },
};
