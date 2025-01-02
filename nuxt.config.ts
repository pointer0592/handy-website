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
    'nuxt-svgo'
  ],
  svgo: {
    autoImportPath: './assets/icons/custom/',
  },
  icon: {
    customCollections: [
      {
        prefix: 'H',
        dir: './assets/my-icons'
      },
    ],
  },
  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },

  devtools: {
    enabled: true
  },

  colorMode: {
    disableTransition: true
  },

  imports: {
    // Add tv and VariantProps to the set of auto imported modules
    presets: [
      {
        from: 'consola',
        imports: ['consola'],
      },
    ],
  },
  routeRules: {
    '/api/search.json': { prerender: true }
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
