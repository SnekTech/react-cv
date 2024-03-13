import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider, ColorModeScript, extendTheme, ThemeConfig } from "@chakra-ui/react";

const themeConfig: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}

const theme = extendTheme({
    config: themeConfig,
    colors: {
        brand: {
            500: '#3F51B5',
            50: '#E8EAF6'
        },
    }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <ChakraProvider theme={theme}>
            <App/>
        </ChakraProvider>
    </React.StrictMode>,
)
