// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image-edge',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'nuxt-vue3-google-signin',
    'nuxt-svgo',
    '@nuxtjs/cloudinary'
  ],
  runtimeConfig: {
    public: {
      cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    },
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
  },
  svgo: {
    autoImportPath: './assets/icons/custom/'
  },
  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  image: {
    cloudinary: {
      baseURL: `${process.env.CLOUDINARY_CLOUD_NAME}handy/`
    },
    format: ['webp'],
    quality: 80
  },
  devtools: {
    enabled: true
  },

  colorMode: {
    disableTransition: true
  },

  imports: {
    presets: [
      {
        from: 'consola',
        imports: ['consola']
      },
    ],
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-07-11',

  typescript: {
    strict: false
  },

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
