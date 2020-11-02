import styled from 'styled-components';
import { Button } from '../../../../common/presentation/components/button/Button';

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const JokeWrapper = styled.div`
  padding: 24px 12px;
  border: 1px solid #3aabe2;
  margin-bottom: 16px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled(Button)`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;
