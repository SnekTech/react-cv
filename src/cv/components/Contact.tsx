import { UnderlinedTitle } from "./UnderlinedTitle.tsx";
import { Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";

type ContactItem = {
    name: string
    value: string
}

const syfContacts: ContactItem[] = [
    {
        name: '手机',
        value: '132-0511-5206'
    },
    {
        name: '邮箱',
        value: '3205593679@qq.com'
    },
    {
        name: '微信',
        value: 'a13205115206'
    },
    {
        name: 'QQ',
        value: '3205593679'
    }
];

export const Contact = () => (
    <>
        <UnderlinedTitle title={'联系方式'}/>
        <UnorderedList listStyleType={'none'} margin={'0'}>
            {syfContacts.map(contact => (

                <ListItem key={contact.name}>
                    <Flex flexDir={'column'}>
                        <Heading size={'sm'}>{contact.name}</Heading>
                        <Text>{contact.value}</Text>
                    </Flex>
                </ListItem>
            ))}
        </UnorderedList>
    </>
)