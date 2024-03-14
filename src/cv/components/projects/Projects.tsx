import { Box, List, ListItem } from "@chakra-ui/react";
import { UnderlinedTitle } from "../UnderlinedTitle.tsx";
import { syfProjects } from "./data.ts";
import { ProjectItem } from "./ProjectItem.tsx";

export function Projects() {
    return <Box>
        <UnderlinedTitle title={'个人项目'}/>
        <List spacing={1}>
            {syfProjects.map((project, i) => (
                <ListItem key={i}>
                    <ProjectItem project={project}/>
                </ListItem>
            ))}
        </List>
    </Box>
}