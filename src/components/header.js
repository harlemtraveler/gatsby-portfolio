import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { HeaderWrapper, HeaderContainer, MainNav } from '../components/StyledComponents'
import Logo from '../components/devopsec-logo.png'

// const logo = '/src/pages/devopsec-logo.png'

const Header = ({ data }) => (
  <HeaderWrapper>
    <HeaderContainer>

      <MainNav>
        <ul>
          <li>
            <Link to={'/'}>
              <img src={{logo}} />
            </Link>
          </li>
          <li>
            <Link to={'/work/'}>Work</Link>
          </li>
          {/* <li>
            <Link to={'/projects/'}>Projects</Link>
          </li> */}
          <li>
            <Link to={'/page-2/'}>Page 2</Link>
          </li>
        </ul>
      </MainNav>

    </HeaderContainer>
  </HeaderWrapper>
)

export default Header;
