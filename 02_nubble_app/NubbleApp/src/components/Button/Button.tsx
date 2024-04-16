import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export function Button({ title, loading }: ButtonProps) {
  return (
    <Box
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16">
      <Text preset="paragraphMedium" bold style={{ color: '#fff' }}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text preset="paragraphMedium" bold style={{ color: '#fff' }}>
            {title}
          </Text>
        )}
      </Text>
    </Box>
  );
}
