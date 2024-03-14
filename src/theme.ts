import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const themeConfig: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}

export const theme = extendTheme({
    config: themeConfig,
    colors: {
        brand: {
            500: '#3F51B5',
            50: '#E8EAF6'
        },
    },
})
