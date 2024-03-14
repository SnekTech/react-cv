import { Box, List, ListItem } from "@chakra-ui/react";
import { UnderlinedTitle } from "../UnderlinedTitle.tsx";
import { syfExperiences } from "./data.ts";
import { ExperienceItem } from "./ExperienceItem.tsx";

export function WorkingExperience() {
    return <Box>
        <UnderlinedTitle title={'实践经历'}/>
        <List>
            {syfExperiences.map((experience, i) => (
                <ListItem key={i}>
                    <ExperienceItem experience={experience}/>
                </ListItem>
            ))}
        </List>
    </Box>
}