import React from 'react';

import { useAppTheme } from '@hooks';
import { ThemeColors } from '@theme';

import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native';

interface ActivityIndicatorProps
  extends Omit<RNActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({ color }: ActivityIndicatorProps) {
  const { colors } = useAppTheme();

  return <RNActivityIndicator color={colors[color]} />;
}
