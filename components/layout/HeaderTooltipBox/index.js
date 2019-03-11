/**
 *
 * <HeaderTooltipBox />
 *
 * A Text Container that looks like a tooltip box
 *
 */
import styled from 'styled-components';

export const HeaderTooltipBox = styled.div`
  position: relative;
  border: 4px solid #c2e1f5;
  min-height: 10rem;
  min-width: 70%;
  background: whitesmoke;
  border-radius: 2rem;
  padding: 2rem;
  margin-bottom: 3rem;

  &:after,
  &:before {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(136, 183, 213, 0);
    border-top-color: whitesmoke;
    border-width: 30px;
    margin-left: -30px;
  }
  &:before {
    border-color: rgba(194, 225, 245, 0);
    border-top-color: #c2e1f5;
    border-width: 36px;
    margin-left: -36px;
  }
`;

export default HeaderTooltipBox;
