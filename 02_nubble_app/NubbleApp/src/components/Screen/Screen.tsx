import React, { ReactNode } from 'react';
import { Box } from '../Box/Box';

interface ScreenProps {
  children: ReactNode;
}

export function Screen({ children }: ScreenProps) {
  return <Box paddingHorizontal="s24">{children}</Box>;
}
