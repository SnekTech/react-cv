import './App.css'
import { Box, Center } from "@chakra-ui/react";
import { CV } from "./cv/CV.tsx";
import { AppBar } from "./layout/AppBar.tsx";

function App() {

    return (
        <>
            <AppBar/>
            <Center mt={'5rem'}>
                <Box width={'210mm'} height={'297mm'} border={'2px dashed'}>
                    <CV/>
                </Box>
            </Center>
        </>
    )
}

export default App
