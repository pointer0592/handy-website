import { defineEventHandler, getQuery, sendError } from 'h3'
import axios from 'axios'

export default defineEventHandler(async (event) => {
  const { folderPath } = getQuery(event)

  if (!folderPath) {
    return sendError(event, new Error('Missing folderPath parameter'))
  }

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET

  if (!cloudName || !apiKey || !apiSecret) {
    return sendError(event, new Error('Cloudinary credentials are not set'))
  }

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image`

  try {
    const response = await axios.get(url, {
      params: {
        prefix: folderPath,
        type: 'upload',
        max_results: 500
      },
      auth: {
        username: apiKey,
        password: apiSecret
      }
    })

    const images = response.data.resources
    return { count: images.length, images }
  } catch (error) {
    return sendError(event, new Error(`Error fetching Cloudinary folder images: ${error}`))
  }
})
