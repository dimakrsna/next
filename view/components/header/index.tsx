import React from 'react'
import Link from 'next/link'

export interface Props {
  isIndexPage?: boolean
}

export const Header: React.SFC<Props> = (props) => {
  const { isIndexPage } = props

  return (
    <header className={`main_menu ${(isIndexPage) ? '' : 'single_page_menu'}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/index"><a className="navbar-brand main_logo"><img src="/static/img/logo.png" alt="logo" /></a></Link>
              <a className="navbar-brand single_page_logo" href="index.html"> <img src="/static/img/logo.png" alt="logo" /> </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="menu_icon"></span>
              </button>

              <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/index">
                      <a className="nav-link" >Home</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/features">
                      <a className="nav-link">features</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/pricing">
                      <a className="nav-link">pricing</a>
                    </Link>
                  </li>
                  {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                      role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="blog.html"> blog</a>
                      <a className="dropdown-item" href="single-blog.html">Single blog</a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown1"
                      role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">pages</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                      <a className="dropdown-item" href="elements.html">Elements</a>
                    </div>
                  </li> */}
                  <li className="nav-item">
                    <Link href="/contact">
                      <a className="nav-link" href="contact.html">Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <a href="#" className="d-none d-sm-block btn_1 home_page_btn">sing up</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}