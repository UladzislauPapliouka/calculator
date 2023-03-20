import styled from 'styled-components';

const ErrorText = styled.span`
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xxxxl}px;
`;
const ErrorWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export { ErrorText, ErrorWrapper };
