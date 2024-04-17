import React from 'react';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';
import { ToucableOpacityBox, ToucableOpacityBoxProps } from '../Box/Box';
import { Text } from '../Text/Text';
import { buttonPressets } from './buttonPressets';

export type ButtonPresset = 'primary' | 'outline';

interface ButtonProps extends ToucableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPresset;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled = false,
  ...toucableOpacityBoxProps
}: ButtonProps) {
  const buttonPresset =
    buttonPressets[preset][disabled ? 'disabled' : 'default'];

  return (
    <ToucableOpacityBox
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      disabled={disabled}
      {...buttonPresset.container}
      {...toucableOpacityBoxProps}>
      <Text preset="paragraphMedium" bold style={{ color: '#fff' }}>
        {loading ? (
          <ActivityIndicator color={buttonPresset.content} />
        ) : (
          <Text preset="paragraphMedium" bold color={buttonPresset.content}>
            {title}
          </Text>
        )}
      </Text>
    </ToucableOpacityBox>
  );
}
