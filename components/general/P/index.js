import styled from 'styled-components';

const getColor = props => {
  let color;
  if (props.light) {
    color = props.theme.colors.text.light;
  } else {
    color = props.theme.colors.text.dark;
  }
  return color;
};

export const P = styled.p`
  font-family: ${props => props.theme.font.family.secondaryFontFamily};
  font-size: ${props => props.theme.font.groups.xs.size};
  font-variant: ${props => props.theme.font.groups.xs.variant};
  transform: ${props => props.theme.font.groups.xs.transform};
  padding: ${props => props.theme.font.groups.xs.padding};
  line-height: ${props => props.theme.font.groups.xs.height};
  color: ${props => getColor(props)};
`;

P.defaultProps = {
  theme: {
    colors: {
      text: {
        dark: '#333',
      },
    },
    font: {
      family: {
        secondaryFontFamily: 'Open Sans, sans-serif',
      },
      groups: {
        xs: {
          size: '1rem',
          weight: '',
          height: '1.5rem',
          spacing: null,
          variant: null,
          style: null,
          transform: null,
          padding: '1rem',
        },
      },
    },
  },
};

export default P;
