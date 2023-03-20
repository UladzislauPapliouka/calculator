import {
  columnSizes,
  displayBreakpoints,
  rowSizes,
} from '@constants/styles/sizes';
import styled from 'styled-components';

const CalculatorWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: ${rowSizes.md}px 1fr;
  grid-template-columns: 1fr ${columnSizes.md}px;
  grid-template-areas:
    'disp  his'
    'keyp  his';
  height: 89vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.mainBackground};
  @media screen and (max-width: ${displayBreakpoints.lg}px) {
    grid-template-rows: auto;
    grid-template-columns: 100%;
    grid-template-areas:
      'disp'
      'keyp'
      'his';
  }
`;

export default CalculatorWrapper;
