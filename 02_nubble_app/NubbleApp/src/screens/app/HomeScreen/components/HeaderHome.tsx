import React from 'react';

import { LogoSimples } from '@brand';
import {
  Box,
  BoxProps,
  Icon,
  IconProps,
  TouchableOpacityBox,
} from '@components';
import { useAppSafeArea } from '@hooks';
import { Theme } from '@theme';

function IconButton({
  onPress,
  iconName,
  mr,
}: {
  onPress: () => void;
  iconName: IconProps['name'];
  mr?: keyof Theme['spacing'];
}) {
  return (
    <TouchableOpacityBox mr={mr} onPress={onPress}>
      <Icon name={iconName} />
    </TouchableOpacityBox>
  );
}

export function HomeHeader() {
  const { top } = useAppSafeArea();

  function navigateTo(screenName: string) {
    console.log(screenName);
  }

  return (
    <Box {...$wrapper} style={{ paddingTop: top }}>
      <LogoSimples width={70} />
      <Box flexDirection="row" justifyContent="space-around">
        <IconButton
          onPress={() => navigateTo('search')}
          iconName="search"
          mr="s24"
        />
        <IconButton
          onPress={() => navigateTo('bell')}
          iconName="bell"
          mr="s24"
        />
        <IconButton onPress={() => navigateTo('chat')} iconName="chat" />
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: 's24',
  paddingHorizontal: 's24',
  alignItems: 'center',
};
