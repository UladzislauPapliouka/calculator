import styled from 'styled-components';

const ErrorWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xxxxl}px;
`;
export default ErrorWrapper;
