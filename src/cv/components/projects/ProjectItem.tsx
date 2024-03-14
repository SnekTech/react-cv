import { Project } from "./data.ts";
import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { Keywords } from "../Keywords.tsx";
import { MdCheckCircle } from "react-icons/md";

export function ProjectItem(props: {project: Project}) {
    const {name, keywords, points} = props.project
    return <Box>
        <Text fontWeight={'bold'} fontSize={'1.1rem'}>{name}</Text>
        <Keywords keywords={keywords}/>
        <List fontSize={'0.9rem'}>
            {points.map((point, i) => (
                <ListItem key={i}>
                    <ListIcon as={MdCheckCircle} color={'brand.500'}/>
                    {point}
                </ListItem>
            ))}
        </List>
    </Box>
}