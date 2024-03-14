import { Rating, RatingScore } from "./Rating.tsx";
import { UnderlinedTitle } from "./UnderlinedTitle.tsx";
import { Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";

type Skill = {
    name: string,
    level: RatingScore,
}

const syfSkills: Skill[] = [
    { name: 'C#/.Net', level: 5 },
    { name: 'C++', level: 4 },
    { name: 'Unity', level: 4 },
    { name: 'TypeScript', level: 4 },
    { name: '计算机图形学', level: 4 },
    { name: '算法与数据结构', level: 4 },
    { name: '设计模式', level: 4 },
    { name: '操作系统', level: 4 },
    { name: '计算机网络', level: 3 },
    { name: '数据库', level: 4 },
    { name: 'React', level: 4 },
    { name: 'Git', level: 5 },
];

export function Skills() {
    return <>
        <UnderlinedTitle title={'技能'}/>
        <UnorderedList listStyleType={'none'} margin={0}>
            {syfSkills.map(skill => (
                <ListItem key={skill.name}>
                    <Flex>
                        <Text flexGrow={1}>{skill.name}</Text>
                        <Rating rating={skill.level}/>
                    </Flex>
                </ListItem>
            ))}
        </UnorderedList>
    </>
}