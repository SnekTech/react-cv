import './App.css'
import { Box, Button, Center } from "@chakra-ui/react";
import { CV } from "./cv/CV.tsx";
import { AppBar } from "./layout/AppBar.tsx";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function App() {

    const cvRef = useRef(null)
    const handlePrint = useReactToPrint({
        content: () => cvRef.current
    })

    return (
        <>
            <AppBar/>

            <Button colorScheme={'blue'} onClick={handlePrint}>Print</Button>
            <Center mt={'5rem'}>
                <Box width={'210mm'} height={'297mm'} border={'2px dashed'}>
                    <CV ref={cvRef}/>
                </Box>
            </Center>
        </>
    )
}

export default App
