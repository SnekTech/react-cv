import { EducationExperience } from "./data.ts";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { DateRangeDisplay } from "../DateRangeDisplay.tsx";

export function EducationItem({ experience: {
    dateRange,
    university,
    degree,
    school,
    major,
    GPA
} }: { experience: EducationExperience }) {
    return <Flex>
        <DateRangeDisplay range={dateRange}/>
        <Box ml={'2rem'}>
            <Heading size={'sm'}>{university}</Heading>
            <Text>{degree}-{school}-{major}</Text>
            <Text>{GPA}</Text>
        </Box>
    </Flex>
}