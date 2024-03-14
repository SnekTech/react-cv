import { Header } from "./components/Header.tsx";
import { forwardRef } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { UnderlinedTitle } from "./components/UnderlinedTitle.tsx";
import { Contact } from "./components/Contact.tsx";
import { Skills } from "./components/Skills.tsx";

export const CV = forwardRef<HTMLDivElement>((_, ref) => {
    return <Flex ref={ref} height={'100%'} flexDir={'column'}>
        <Box>
            <Header/>
        </Box>

        <Flex flexGrow={1}>
            <Box flexGrow={1} padding={'0.7rem'}>
                <UnderlinedTitle title={'教育经历'}/>
            </Box>

            <Box width={'240px'} bgColor={'brand.50'} padding={'0.7rem'}>
                <Contact/>
                <Skills/>
            </Box>
        </Flex>
    </Flex>
})
