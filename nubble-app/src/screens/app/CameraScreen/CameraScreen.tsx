import React, { useState } from 'react'
import { Dimensions, StyleSheet } from 'react-native'

import { useIsFocused } from '@react-navigation/native'
import {
  Camera,
  useCameraDevice,
  usePhotoOutput,
} from 'react-native-vision-camera'

import { Box } from '../../../components/Box/Box'
import type { BoxProps } from '../../../components/Box/Box'
import { Icon } from '../../../components/Icon/Icon'
import { PermissionManager } from '../../../components/PermissionManager/PermissionManager'
import { useAppSafeArea } from '../../../hooks/useAppSafeArea'
import { useAppState } from '../../../hooks/useAppState'
import type { AppScreenProps } from '../../../routes/navigationType'
import { multimediaService } from '../../../services/multimedia/multimediaService'

const CAMERA_VIEW = Dimensions.get('screen').width
const CONTROL_HEIGHT = (Dimensions.get('screen').height - CAMERA_VIEW) / 2
const CONTROL_DIFF = 30

export function CameraScreen({ navigation }: AppScreenProps<'CameraScreen'>) {
  const { top } = useAppSafeArea()
  const [flashOn, setFlashOne] = useState(false)

  const [isReady, setIsReady] = useState(false)
  const device = useCameraDevice('back', {
    physicalDevices: ['ultra-wide-angle', 'wide-angle', 'telephoto'],
  })

  // Na v5 a captura não sai mais de um ref da view: a foto é tirada pelo
  // output, que é declarado aqui e conectado à sessão pela prop `outputs`.
  const photoOutput = usePhotoOutput()

  const isFocused = useIsFocused()
  const appState = useAppState()
  const isActive = isFocused && appState === 'active'

  async function takePhoto() {
    // `capturePhotoToFile` grava direto num arquivo temporário e devolve o
    // caminho. A variante em memória (`capturePhoto`) exigiria `dispose()`.
    const photoFile = await photoOutput.capturePhotoToFile(
      { flashMode: flashOn ? 'on' : 'off' },
      {},
    )

    navigation.navigate('PublishPostScreen', {
      imageUri: multimediaService.prepareImageUri(photoFile.filePath),
    })
  }

  function toggleFlash() {
    setFlashOne(prev => !prev)
  }

  return (
    <PermissionManager
      permissionName="camera"
      description="Permita o Nubble acessar a camera">
      <Box flex={1}>
        {device != null && (
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            outputs={[photoOutput]}
            isActive={isActive}
            onStarted={() => setIsReady(true)}
            onStopped={() => setIsReady(false)}
          />
        )}

        <Box flex={1} justifyContent="space-between">
          <Box {...$controlAreaTop} style={{ paddingTop: top }}>
            <Icon
              size={20}
              color="grayWhite"
              name="arrowLeft"
              onPress={navigation.goBack}
            />
            <Icon
              size={20}
              color="grayWhite"
              name={flashOn ? 'flashOn' : 'flashOff'}
              onPress={toggleFlash}
            />
            <Box width={20} />
          </Box>

          <Box {...$controlAreaBottom}>
            {isReady && (
              <Icon
                size={80}
                name="cameraClick"
                color="grayWhite"
                onPress={takePhoto}
              />
            )}
          </Box>
        </Box>
      </Box>
    </PermissionManager>
  )
}

const $controlAreaTop: BoxProps = {
  backgroundColor: 'black60',
  height: CONTROL_HEIGHT - CONTROL_DIFF,
  justifyContent: 'space-between',
  flexDirection: 'row',
  paddingHorizontal: 's24',
}
const $controlAreaBottom: BoxProps = {
  backgroundColor: 'black60',
  height: CONTROL_HEIGHT + CONTROL_DIFF,
  justifyContent: 'center',
  alignItems: 'center',
}
