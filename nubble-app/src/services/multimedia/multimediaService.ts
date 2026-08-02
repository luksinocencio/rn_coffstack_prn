import { Platform } from 'react-native'

import { CameraRoll } from '@react-native-camera-roll/camera-roll'
import { Images } from 'react-native-nitro-image'

import { ImageForUpload, PhotoListPaginated } from './multimediaType'

async function getPhotos(cursor?: string): Promise<PhotoListPaginated> {
  const photoPage = await CameraRoll.getPhotos({ first: 12, after: cursor })

  const photoList = photoPage.edges.map(edge => edge.node.image.uri)

  return {
    photoList,
    cursor: photoPage.page_info.end_cursor,
    hasNextPage: photoPage.page_info.has_next_page,
  }
}

/**
 *
 * @param imageUri image path
 * @returns `ImageForUpload` - an object with props requested by a `FormData`
 */
async function prepareImageForUpload(
  imageUri: string,
): Promise<ImageForUpload> {
  const image = await Images.loadFromFileAsync(toFilePath(imageUri))
  // `quality` do Nitro é 0(pior)...100(melhor) — 50 equivale ao `compress: 0.5`
  // que o expo-image-manipulator usava.
  const path = await image.saveToTemporaryFileAsync('jpg', 50)

  return {
    uri: `file://${path}`,
    name: Date.now().toString(),
    type: 'image/jpeg',
  }
}

/**
 * O Nitro Image trabalha com caminho de arquivo, não com URL: `saveToFileAsync`
 * e `loadFromFileAsync` esperam `/tmp/foo.jpg`, sem o prefixo `file://`.
 */
function toFilePath(imageUri: string): string {
  return imageUri.startsWith('file://') ? imageUri.replace('file://', '') : imageUri
}

/**
 *
 * @param imageUri image path as provided by either by camera or gallery modules
 *
 * @returns an imageUri ready to be used in the `Image` component and `FormData` requests
 */
function prepareImageUri(imageUri: string): string {
  if (Platform.OS !== 'android') {
    return imageUri
  }

  if (imageUri.startsWith('file://')) {
    return imageUri
  }

  return `file://${imageUri}`
}

export const multimediaService = {
  prepareImageForUpload,
  getPhotos,
  prepareImageUri,
}
