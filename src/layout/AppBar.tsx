import { ButtonGroup, Flex, Heading, IconButton, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export function AppBar() {
    const { colorMode, toggleColorMode } = useColorMode()

    const colorModeIcon = colorMode == 'dark' ?
        <MdLightMode/> : <MdDarkMode/>

    return <>
        <Flex bgColor={'darkcyan'} padding={'1rem'}>
            <Heading>React CV</Heading>
            <ButtonGroup ml={'auto'}>
                <IconButton
                    colorScheme={'teal'}
                    aria-label={'toggle color mode'}
                    onClick={toggleColorMode}
                    icon={colorModeIcon}
                />
            </ButtonGroup>
        </Flex>
    </>
}