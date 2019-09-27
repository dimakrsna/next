import React from 'react'
import { NextPage } from 'next'

import { Container } from '../view/components/container'
import { Features } from '../view/features'

const FeaturesPage: NextPage = () => {
    return (
        <Container seoTitle="Features">
            <Features/>
        </Container>
    )
}

export default FeaturesPage