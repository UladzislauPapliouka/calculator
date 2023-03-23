import styled, { css } from 'styled-components';

const CalculatorWrapper = styled.div`
  position: relative;
  display: grid;
  ${({ theme: { sizes }, isHistoryOpen }) =>
    !isHistoryOpen
      ? css`
          grid-template-rows: ${sizes.rowSizes.md}px 1fr;
          grid-template-columns: 1fr;
          grid-template-areas:
            'disp '
            'keyp ';
        `
      : css`
          grid-template-rows: ${sizes.rowSizes.md}px 1fr;
          grid-template-columns: 1fr ${sizes.columnSizes.md}px;
          grid-template-areas:
            'disp  his'
            'keyp  his';
        `}
  height: 89vh;
  box-sizing: border-box;
  padding: ${({ theme: { sizes } }) => sizes.paddingSizes.xs}px
    ${({ theme: { sizes } }) => sizes.paddingSizes.s}px;
  overflow: hidden;
  background-color: ${({ theme: { mainBackground } }) => mainBackground};

  @media screen and (max-width: ${({ theme: { sizes } }) =>
      sizes.displayBreakpoints.lg}px) {
    grid-template-rows: ${({ theme: { sizes } }) => sizes.rowSizes.md}px 1fr 1fr;
    grid-template-columns: 100%;
    grid-template-areas:
      'disp'
      'keyp'
      'his';
  }
`;

export default CalculatorWrapper;
