import styled from 'styled-components';

export const ButtonWrapper = styled.div<{ disabled?: boolean }>`
  background-color: ${({ disabled }): string =>
    disabled ? 'gray' : '#ff5b24'};
  padding: 10px 20px;
  cursor: pointer;
  font-family: 'Arial';
  color: #fff;
  text-align: center;
  pointer-events: ${({ disabled }): string => (disabled ? 'none' : '')};
`;
