import { Header } from "./components/Header.tsx";
import { forwardRef } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Contact } from "./components/Contact.tsx";
import { Skills } from "./components/Skills.tsx";
import { LanguageSkill } from "./components/LanguageSkill.tsx";
import { Education } from "./components/education/Education.tsx";
import { WorkingExperience } from "./components/working-experience/WorkingExperience.tsx";
import { Projects } from "./components/projects/Projects.tsx";

export const CV = forwardRef<HTMLDivElement>((_, ref) => {
    return <Flex ref={ref} height={'100%'} flexDir={'column'}>
        <Box>
            <Header/>
        </Box>

        <Flex flexGrow={1}>
            <Box flexGrow={1} padding={'0.7rem'}>
                <Education/>
                <WorkingExperience/>
                <Projects/>
            </Box>

            <Box width={'240px'} bgColor={'brand.50'} padding={'0.7rem'}
                 flexShrink={0}
            >
                <Contact/>
                <Skills/>
                <LanguageSkill/>
            </Box>
        </Flex>
    </Flex>
})
