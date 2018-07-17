import React from 'react'
import {ThemeProvider} from 'styled-components'

const primaryPalette = {
    '50': '#fbe0f3',
    '100': '#f6b3e0',
    '200': '#f080cc',
    '300': '#ea4db7',
    '400': '#e626a7',
    '500': '#e10098',
    '600': '#dd0090',
    '700': '#d90085',
    '800': '#d5007b',
    '900': '#cd006a',
    'A100': '#fff5f9',
    'A200': '#ffc2de',
    'A400': '#ff8fc2',
    'A700': '#ff75b4',
    contrast: {
        '50': '#000000',
        '100': '#000000',
        '200': '#000000',
        '300': '#000000',
        '400': '#ffffff',
        '500': '#ffffff',
        '600': '#ffffff',
        '700': '#ffffff',
        '800': '#ffffff',
        '900': '#ffffff',
        'A100': '#000000',
        'A200': '#000000',
        'A400': '#000000',
        'A700': '#ffffff',
    }

}

const createTheme = palette => ({
    bg: palette['500'],
    fg: palette.contrast['500']
})


const theme = {
    primary: createTheme(primaryPalette),
    default: {
        bg: '#ffffff'
    }
}

export default Component => <ThemeProvider theme={theme}><Component/></ThemeProvider>