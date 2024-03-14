import { Box, List, ListItem } from "@chakra-ui/react";
import { UnderlinedTitle } from "../UnderlinedTitle.tsx";
import { syfEducationItems } from "./data.ts";
import { EducationItem } from "./EducationItem.tsx";

export function Education() {
    return <Box>
        <UnderlinedTitle title={'教育经历'}/>
        <List spacing={2}>
            {syfEducationItems.map((experience, i) => (
                <ListItem key={i}>
                    <EducationItem experience={experience}/>
                </ListItem>
            ))}
        </List>
    </Box>
}