import * as React from 'react'
import { NextPage } from 'next'

import { Container } from './../view/components/container'
import { Index } from './../view/index'

const IndexPage: NextPage = () => {

  return (
      <Container isIndexPage={true}>
        <Index />
      </Container>
  )
}

export default IndexPage
