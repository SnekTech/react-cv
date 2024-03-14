import { Icon } from "@chakra-ui/react";
import { FaRegStar, FaStar } from "react-icons/fa";

export type RatingScore = 1 | 2 | 3 | 4 | 5

interface Props {
    rating: RatingScore
}

const MaxScore = 5

export function Rating({ rating }: Props) {

    return <div>
        {[...Array(MaxScore)].map((_, i) =>
            (<Icon
                as={i < rating ? FaStar : FaRegStar}
                color={'brand.500'}/>))}
    </div>
}