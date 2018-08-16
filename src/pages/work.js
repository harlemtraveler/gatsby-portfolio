import React, { Component } from 'react';
import { PageWrapper, PageContainer } from '../components/StyledComponents'
import ProjectListing from '../components/ProjectListing'



const Work = ({ data, project }) => (
  <PageWrapper>
    <PageContainer>
      <h2>Projects</h2>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>

        {data.allMarkdownRemark.edges.map(({node}) => (
          <ProjectListing key={node.id} project={node} />
        ))}
      </div>
    </PageContainer>
  </PageWrapper>
)

export const query = graphql`
  query siteMeta {
    allMarkdownRemark(sort: {
      fields: [frontmatter___date], order: DESC
    }) {
      edges {
        node {
          id
          frontmatter{
            title
            date(formatString: "MMMM DD YYYY")
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`;

export default Work;
