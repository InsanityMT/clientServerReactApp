import React from 'react'
import { CardName, CardStyles, CardContent } from './Card.styles'

const Card = ({ item }) => {
    const { name, price, rating, num_reviews, hotel_class } = item

    return (
        <>
            {
                name &&
                <CardStyles>
                    <CardName>
                        {name}
                    </CardName>
                    <CardContent>
                        <span>{price}</span>
                        <span>{num_reviews} reviews - {rating}</span>
                        <span>{hotel_class} ★</span>
                    </CardContent>
                </CardStyles>
            }
        </>
    )
}

export default Card
