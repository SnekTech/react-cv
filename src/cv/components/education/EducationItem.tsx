import { EducationExperience } from "./data.ts";
import { Box, Flex, Text } from "@chakra-ui/react";
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
        <Box ml={'1rem'}>
            <Text fontWeight={'bold'} fontSize={'1.1rem'}>{university}</Text>
            <Text>{degree}-{school}-{major} GPA: {GPA}</Text>
        </Box>
    </Flex>
}