import React, { FC } from 'react';
import { TitleWrapper } from './Styles';

interface Props {
  text: string;
}

export const Title: FC<Props> = ({ text }: Props) => {
  return <TitleWrapper>{text}</TitleWrapper>;
};
