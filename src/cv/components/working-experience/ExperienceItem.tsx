import { Experience } from "./data.ts";
import { Box, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { DateRangeDisplay } from "../DateRangeDisplay.tsx";
import { MdCheckCircle } from "react-icons/md";
import { Keywords } from "../Keywords.tsx";

export function ExperienceItem({ experience }: { experience: Experience }) {
    const {
        dateRange,
        company,
        job,
        department,
        keywords,
        points
    } = experience
    return <Flex>
        <DateRangeDisplay range={dateRange}/>
        <Box ml={'2rem'}>
            <Text fontWeight={'bold'} fontSize={'large'}>{company}</Text>
            <Text fontStyle={'italic'} fontSize={'small'}>{job}-{department}</Text>
            <Keywords keywords={keywords}/>
            <List>
                {points.map((point, i) => (
                    <ListItem key={i}>
                        <ListIcon as={MdCheckCircle} color={'brand.500'}/>
                        {point}
                    </ListItem>
                ))}
            </List>
        </Box>
    </Flex>
}