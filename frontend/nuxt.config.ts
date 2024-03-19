// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/color-mode',
        '@nuxt/image',
    ],
    css:[
        '~/assets/css/app.css'
    ],
    colorMode:{
        preference: 'system', // default value of $colorMode.preference
        fallback: 'dark', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '',
        storageKey: 'nuxt-color-mode'
    },
    postcss:{
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    generate:{
        nojekyll: true, //not working on this version
    },
    ssr: true, //server side rendered enabled //When true
    target: "static", // and static, nuxt generates a hybrid static site
    app: {
        baseURL: '/'
    },
    typescript: {
        strict: true,
    }


})
