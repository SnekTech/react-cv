import { UnderlinedTitle } from "./UnderlinedTitle.tsx";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const EnglishSkills = [
    "CET-6（507分）和 CET-4（604分）裸考一次通过",
    "无障碍阅读英文技术文档",
    "无字幕观看英文技术相关视频",
    "高效率检索英文信息"
]

export function LanguageSkill() {
    return <>
        <UnderlinedTitle title={'英语水平'}/>
        <List spacing={2}>
            {EnglishSkills.map((skill, i) => (
                <ListItem key={i}>
                    <ListIcon as={MdCheckCircle} color={'brand.500'}/>
                    {skill}
                </ListItem>
            ))}
        </List>
    </>
}