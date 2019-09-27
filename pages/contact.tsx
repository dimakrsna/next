import React from 'react'
import { NextPage } from 'next'

import { Container } from './../view/components/container'
import { Contact } from './../view/contact'

const ContactPage: NextPage = () => {
    return (
        <Container seoTitle="Contact">
            <Contact/>
        </Container>
    )
}

export default ContactPage