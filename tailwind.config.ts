import type {Config} from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#ADC38C',
          50: '#E6EDDD',
          100: '#DEE7D1',
          200: '#D6E1C6',
          300: '#CEDBBA',
          400: '#C6D5AF',
          500: '#ADC38C',
          600: '#343B2A',
          700: '#8E9484',
          800: '#343B2A',
          900: '#343B2A',
          950: '#343B2A',
        },
        amber: {
          DEFAULT: '#CFA443',
          50: '#F1E4C7',
          100: '#ECDBB4',
          200: '#E7D2A1',
          300: '#DDBF7B',
          400: '#D9B669',
          500: '#CFA443',
          600: '#A68336',
          700: '#A68336',
          800: '#7C6228',
          900: '#685222',
          950: '#3E3114',
        },
        slate: {
          DEFAULT: '#1D2A40',
          50: '#E8EAEC',
          100: '#D2D4D9',
          200: '#A5AAB3',
          300: '#616A79',
          400: '#4A5566',
          500: '#1D2A40',
          600: '#0F1520',
          700: '#0F1520',
          800: '#0F1520',
          900: '#0F1520',
          950: '#0C111A',
        }
      },
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
