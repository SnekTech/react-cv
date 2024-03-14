import { Wrap, WrapItem } from "@chakra-ui/react";

export function Keywords(props: { keywords: string[] }) {
    return <Wrap>
        {props.keywords.map(keyword => (

            <WrapItem key={keyword}
                      bgColor={'brand.500'}
                      color={'#fff'}
                      borderRadius={4}
                      padding={'0.1rem 0.3rem'}
                      fontSize={'small'}
            >{keyword}</WrapItem>
        ))}
    </Wrap>
}