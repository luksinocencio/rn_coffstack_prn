import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ToucableOpacityBox, ToucableOpacityBoxProps } from '../Box/Box';
import { Text } from '../Text/Text';

interface ButtonProps extends ToucableOpacityBoxProps {
  title: string;
  loading?: boolean;
}

export function Button({
  title,
  loading,
  ...toucableOpacityBoxProps
}: ButtonProps) {
  return (
    <ToucableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...toucableOpacityBoxProps}>
      <Text preset="paragraphMedium" bold style={{ color: '#fff' }}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text preset="paragraphMedium" bold color="primaryContrast">
            {title}
          </Text>
        )}
      </Text>
    </ToucableOpacityBox>
  );
}
