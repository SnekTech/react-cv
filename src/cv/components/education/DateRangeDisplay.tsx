import { Flex, Text } from "@chakra-ui/react";

export type DateRange = {
    from: string
    to: string
}

interface DateRangeDisPlayProps {
    range: DateRange
}

export function DateRangeDisplay({range}: DateRangeDisPlayProps) {
    return (
        <Flex flexDir={'column'}>
            <Text>{range.from} ~</Text>
            <Text>{range.to}</Text>
        </Flex>
    )
}