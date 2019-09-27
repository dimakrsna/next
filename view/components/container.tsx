import React from 'react'
import Head from 'next/head'

import { Header, Props as HeaderProps } from './header'
import { Footer } from './footer'

interface Props extends HeaderProps {
    seoTitle?: string

}

import './../../static/css/bootstrap.min.css'
import './../../static/css/animate.css'
import './../../static/css/owl.carousel.min.css'
import './../../static/css/all.css'
import './../../static/css/flaticon.css'
import './../../static/css/themify-icons.css'
import './../../static/css/magnific-popup.css'
import './../../static/css/slick.css'
import './../../static/sass/style.scss'

// // import '../static/css/aos.css'
// // import '../static/css/font-awesome.min.css'
// // import '../static/css/nice-select.css'
// // import '../static/css/swiper.min.css'

export class Container extends React.Component<Props> {

    render() {
        const { isIndexPage, seoTitle } = this.props

        return (
            <>
                <Head>
                    <title>Ecobit {seoTitle && `| ${seoTitle}`}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="icon" href="/static/img/favicon.png"/>
                </Head>
                <Header isIndexPage={isIndexPage} />
                {this.props.children}
                <Footer />
            </>
        )
    }
}