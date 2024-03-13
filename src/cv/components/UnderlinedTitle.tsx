import { Box, Flex, Heading } from "@chakra-ui/react";

interface Props {
    title: string
}

export function UnderlinedTitle({title}: Props) {
    return <Flex flexDir={'column'}>
        <Heading size={'md'}>{title}</Heading>
        <Box bgColor={'#00000061'} height={'1mm'} mt={'0.2rem'}/>
    </Flex>
}