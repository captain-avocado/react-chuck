import styled from 'styled-components';

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Jokes = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
  margin-bottom: 16px;
`;

export const JokeCol = styled.div`
  padding: 0 10px;
  width: 33.33%;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const JokeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #3aabe2;
  margin-bottom: 10px;
  padding: 0 10px;
`;

export const JokeContainer = styled.div`
  padding: 10px;
  padding-left: 0;
`;

export const DeleteButton = styled.div`
  height: 100%;
  width: 72px;
  min-width: 72px;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  color: #fff;
  background-color: #3aabe2;
`;
