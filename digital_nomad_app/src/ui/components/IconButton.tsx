import { Pressable, type PressableProps } from 'react-native'
import { useAppTheme } from '../theme/useAppTheme'
import { Box } from './Box'
import { Icon, IconName } from './Icon'

type IconButtonProps = {
  onPress: PressableProps['onPress']
  iconName: IconName
}

export function IconButton({ onPress, iconName }: IconButtonProps) {
  const { boxShadows } = useAppTheme()
  return (
    <Pressable onPress={onPress}>
      <Box
        backgroundColor="primary"
        width={50}
        height={50}
        justifyContent="center"
        alignItems="center"
        borderRadius="rounded"
        style={{ boxShadow: boxShadows.primary }}>
        <Icon name={iconName} color="pureWhite" />
      </Box>
    </Pressable>
  )
}
