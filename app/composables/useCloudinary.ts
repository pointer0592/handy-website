import { useFetch } from '@vueuse/core'

export function useCloudinary() {
  const cloudName = useRuntimeConfig().public.cloudinaryCloudName;
  /**
   * Get an array of image URLs in a Cloudinary folder.
   * @param folderPath - The path to the folder in Cloudinary.
   * @returns An array of full URLs for the images in the folder.
   */
  const getFolderImageUrls = async (folderPath: string) => {
    if (!folderPath) {
      throw new Error('folderPath is required')
    }

    const url = `/api/getCloudinaryFolderImageCount?folderPath=${encodeURIComponent(folderPath)}`

    // Fetch the folder data from the server
    const { data, error } = await useFetch(url).json()

    if (error.value) {
      throw new Error(`Failed to fetch images from folder "${folderPath}"`)
    }

    const { count } = data.value

    // Generate an array of URLs using the folderPath and cloudName
    return Array.from({ length: count }, (_, index) => {
      const imageNumber = index + 1
      return `https://res.cloudinary.com/${cloudName}/image/upload/${folderPath}/${imageNumber}`;
    })
  }

  return {
    getFolderImageUrls
  }
}
