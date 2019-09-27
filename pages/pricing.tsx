import React from 'react'
import { NextPage } from 'next'

import { Container } from '../view/components/container'
import { Pricing } from '../view/pricing'

const PricingPage: NextPage = () => {
    return (
        <Container seoTitle='Pricing'>
            <Pricing/>
        </Container>
    )
}

export default PricingPage