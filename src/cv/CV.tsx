import { TitleBar } from "./components/TitleBar.tsx";
import { forwardRef } from "react";
import { Box, Flex } from "@chakra-ui/react";

export const CV = forwardRef<HTMLDivElement>((_, ref) => {
    return <div ref={ref} style={{ height: '100%' }}>
        <Flex flexDir={'column'} height={'100%'}>
            <Box>
                <TitleBar/>
            </Box>

            <Flex flexGrow={1}>
                <Box flexGrow={1}>
                </Box>

                <Box width={'240px'} bgColor={'brand.50'}>
                </Box>
            </Flex>
        </Flex>
    </div>
})
