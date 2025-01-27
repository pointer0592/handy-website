export default defineAppConfig({
  ui: {
    primary: 'amber',
    gray: 'slate',
    secondary: 'lime',

    button: {
      rounded: 'rounded-lg',
      default: {
        size: 'md'
      }
    },

    input: {
      default: {
        size: 'md'
      }
    },

    card: {
      rounded: 'rounded-lg'
    },

    icons: {
      dark: 'i-carbon-moon',
      light: 'i-carbon-sun'
    }
  },
  app: {
    name: 'Hudson Home Services',
    description: 'Serving the Hudson Valley with handyman and other bespoke services.',
    url: 'http://localhost:5000',
    image: '/images/og-image.png',
    configs: {
      colorMode: true
    },
    links: [
      {
        label: 'About',
        to: '/about'
      }, {
        label: 'Services',
        to: '/services',
        children: [{
          label: 'Approach',
          to: '/services/approach',
          icon: 'i-heroicons-computer-desktop',
          description: 'Get started with one of our official templates.'
        },{
          label: 'Pricing',
          to: '/services/pricing',
          icon: 'i-heroicons-ticket',
          description: 'A simple pricing, for solo developers or teams.'
        }]
      }, {
        label: 'Work',
        to: '/work'
      }, {
        label: 'My Account',
        to: '/account'
      }
    ],
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/nuxt-ui-pro/docs',
      'target': '_blank',
      'aria-label': 'Docs template on GitHub'
    }]
  },
  footer: {
    top: {
      wrapper: 'border-t border-gray-200 dark:border-gray-800',
      container: 'py-8 lg:py-16'
    },
    bottom: {
      wrapper: 'border-t border-gray-200 dark:border-gray-800'
    }
  },
  page: {
    hero: {
      wrapper: 'lg:py-24'
    }
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/nuxt-ui-pro/docs/edit/main/content',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/nuxt/ui',
        target: '_blank'
      }, {
        icon: 'i-heroicons-book-open',
        label: 'Nuxt UI Pro docs',
        to: 'https://ui.nuxt.com/pro/guide',
        target: '_blank'
      }, {
        icon: 'i-simple-icons-nuxtdotjs',
        label: 'Purchase a license',
        to: 'https://ui.nuxt.com/pro/purchase',
        target: '_blank'
      }]
    }
  }
})
