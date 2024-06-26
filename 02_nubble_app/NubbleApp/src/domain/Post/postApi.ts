import { api, PageAPI, PageParams } from '@api'
import { ImageForUpload } from '@services'

import { PostAPI } from './postTypes'

async function getList(params?: PageParams): Promise<PageAPI<PostAPI>> {
  // await new Promise(resolve => setTimeout(resolve, 1000))
  const { data } = await api.get<PageAPI<PostAPI>>('user/post', {
    params,
  })

  return data
}

async function createPost(
  text: String,
  imageCover: ImageForUpload,
): Promise<PostAPI> {
  const formData = new FormData()
  formData.append('text', text)
  formData.append('imageCover', imageCover)

  const response = await api.postForm<PostAPI>('user/post', formData)
  return response.data
}

export const postApi = {
  getList,
  createPost,
}
