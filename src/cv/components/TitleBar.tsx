import { Box, Img } from "@chakra-ui/react";

export function TitleBar() {
    return <>
        <Box bgColor={'brand'} padding={'1rem'}>
            <Img src={'portrait-tencent.jpg'}
                 width={'7rem'}
                 clipPath={'circle(50% at 50% 50%)'}
            />
        </Box>
    </>
}