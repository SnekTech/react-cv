import { Header } from "./components/Header.tsx";
import { forwardRef } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { UnderlinedTitle } from "./components/UnderlinedTitle.tsx";

export const CV = forwardRef<HTMLDivElement>((_, ref) => {
    return <div ref={ref} style={{ height: '100%' }}>
        <Flex flexDir={'column'} height={'100%'}>
            <Box>
                <Header/>
            </Box>

            <Flex flexGrow={1}>
                <Box flexGrow={1} padding={'0.7rem'}>
                    <UnderlinedTitle title={'教育经历'}/>
                </Box>

                <Box width={'240px'} bgColor={'brand.50'}>
                </Box>
            </Flex>
        </Flex>
    </div>
})
