import colors from 'vuetify/es5/util/colors'
import fr from 'vuetify/es5/locale/fr'

export default {
  icons: {
    iconfont: 'fa'
  },
  theme: {
    themes: {
      light: {
        primary: '#0075B0',
        accent: '#13A9D8 linear-gradient(99deg, #13A9D8 0%, #7B52BB 100%)',
        secondary: '#E8B400',
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
        'primary-light': '#7FBED9',
        discreet: '#98B4C3',
        'dark-light': '#414141',
        cards: '#EDF9FB',
        'discreet-gray': '#A0A0A0'
      }
    }
  },
  lang: {
    locales: { fr },
    current: 'fr'
  }
}
