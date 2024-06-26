import { ImageForUpload } from './multimediaType.ts'

function prepareImageForUpload(imageUri: string): ImageForUpload {
  // TODO: - implementar

  return {
    uri: 'path',
    name: 'name',
    type: 'image/png',
  }
}

export const multimediaService = {
  prepareImageForUpload,
}
