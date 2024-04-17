import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';
import { Box, BoxProps } from '../Box/Box';
import { $fontFamily, $fontSizes, Text } from '../Text/Text';

interface TextInputProps extends RNTextInputProps {
  label: string;
}
export function TextInput({ label, ...rnTextInputProps }: TextInputProps) {
  const { colors } = useAppTheme();

  return (
    <Box>
      <Text preset="paragraphMedium" marginBottom="s4">
        {label}
      </Text>
      <Box {...$textInputContainer}>
        <RNTextInput
          style={$textInputStyle}
          placeholderTextColor={colors.gray2}
          {...rnTextInputProps}
        />
      </Box>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  borderWidth: 1,
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};

const $textInputContainer: BoxProps = {
  borderWidth: 1,
  padding: 's16',
  borderColor: 'gray4',
  borderRadius: 's12',
};
