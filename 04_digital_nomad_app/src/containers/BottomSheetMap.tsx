import MapView from 'react-native-maps'

import { BottomSheet, BottomSheetProps } from '@/src/components/BottomSheet'
import { Box } from '@/src/components/Box'
import { IconButton } from '@/src/components/IconButton'
import { useAppTheme } from '@/src/theme/useAppTheme'
import { City } from '@/src/types'
import { useWindowDimensions } from 'react-native'

type BottomSheetMapProps = Omit<BottomSheetProps, 'children'> & {
  location: City['location']
}

export function BottomSheetMap({
  location,
  ...bottomSheetProps
}: BottomSheetMapProps) {
  const { height } = useWindowDimensions()
  const { borderRadii, spacing } = useAppTheme()
  return (
    <BottomSheet {...bottomSheetProps}>
      <MapView
        style={{
          width: '100%',
          height: height * 0.7,
          borderRadius: borderRadii.default,
        }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.2,
        }}
      />
      <Box position="absolute" top={spacing.padding} right={spacing.padding}>
        <IconButton onPress={bottomSheetProps.onPress} iconName="Close" />
      </Box>
    </BottomSheet>
  )
}
