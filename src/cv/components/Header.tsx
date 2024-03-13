import { Box, Flex, Img, Text } from "@chakra-ui/react";

export function Header() {
    return <>
        <Flex bgColor={'brand.500'} padding={'1rem'}>
            <Img src={'portrait-tencent.jpg'}
                 width={'7rem'}
                 clipPath={'circle(50% at 50% 50%)'}
            />
            <Box ml={'2rem'} color={'#fff'}>
                <Text fontSize={'2.3rem'} mb={'0.5rem'}>佘玉非</Text>
                <Text fontSize={'1.1rem'}>软件工程师</Text>
            </Box>
        </Flex>
    </>
}