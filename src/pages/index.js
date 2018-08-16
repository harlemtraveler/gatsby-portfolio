import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
// import Img from 'gatsby-image'
import { PageWrapper, PageContainer } from '../components/StyledComponents'
import HipsterPic from './hipster-in-suit.jpg'

const IndexPage = ({ data }) => (
  <PageWrapper
    style={{
      backgroundImage: `url(${HipsterPic})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
  >

  </PageWrapper>
)

export const query = graphql`
  query BannerImage{
    background: imageSharp(id: {regex: "/images/sitting-hipster.jpg/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default IndexPage
