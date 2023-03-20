import colors from '@constants/styles/colors';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.gray1207};
  &:empty {
    display: none;
  }
`;

export default ModalWrapper;
