import styled from 'styled-components';

const CalculatorWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: ${({ theme: { sizes } }) => sizes.rowSizes.md}px 1fr;
  grid-template-columns: 1fr ${({ theme: { sizes } }) => sizes.columnSizes.md}px;
  grid-template-areas:
    'disp  his'
    'keyp  his';
  height: 89vh;
  overflow: hidden;
  background-color: ${({ theme: { mainBackground } }) => mainBackground};
  @media screen and (max-width: ${({ theme: { sizes } }) =>
      sizes.displayBreakpoints.lg}px) {
    grid-template-rows: auto;
    grid-template-columns: 100%;
    grid-template-areas:
      'disp'
      'keyp'
      'his';
  }
`;

export default CalculatorWrapper;
