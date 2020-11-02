import React, { FC } from 'react';
import { JokeWrapper } from './Styles';

interface Props {
  text: string;
}

export const Joke: FC<Props> = ({ text }: Props) => {
  return <JokeWrapper>{text}</JokeWrapper>;
};
