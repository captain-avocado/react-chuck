import React, { FC, ReactNode } from 'react';
import { ButtonWrapper } from './Styles';

interface Props {
  children: ReactNode;
  disabled?: boolean;
  onClick?(): void;
  className?: string;
}

export const Button: FC<Props> = ({
  className,
  children,
  disabled,
  onClick
}: Props) => {
  return (
    <ButtonWrapper className={className} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonWrapper>
  );
};
