import colors from 'vuetify/es5/util/colors'

export default {
    srcDir: 'resources/nuxt',

    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - nuxtVuetify',
        title: 'nuxtVuetify',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'},
        ],
        link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',

        '@nuxtjs/auth-next'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        debug: false,
        prefix: '/api',
        proxy: true,
        https: process.env.API_HTTPS === 'true'
    },

    proxy: {
        '/api': process.env.API_URL
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    // auth-next module configuration: https://auth.nuxtjs.org/guide/
    auth: {
        redirect: {
            home: '/',
            logout: '/login'
        },
        strategies: {
            passport: {
                provider: 'laravel/passport',
                endpoints: {
                    user: {
                        url: process.env.API_URL + '/api/user'
                    }
                },
                url: process.env.API_URL,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                grantType: 'password',
                token: {
                    property: 'access_token',
                    type: 'Bearer',
                    name: 'Authorization',
                    maxAge: 60 * 30
                },
                refreshToken: {
                    property: 'refresh_token',
                    data: 'refresh_token',
                    maxAge: 60 * 60 * 24 * 30
                }
            }
        }
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
            },
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: null,
    },

    env: {
        apiUrl: process.env.API_URL || 'http://localhost'
    }
}
