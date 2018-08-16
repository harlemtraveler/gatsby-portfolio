import React, { Component } from 'react';
import Card from '../components/StyledComponents'

class ProjectPage extends Component {

  render() {
    const { data } = this.props;
    return (
      <div>
        <span>{data.markdownRemark.frontmatter.date}</span>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html
        }} />
      </div>
    );
  }

}

export const query = graphql`
  query ProjectPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;

export default ProjectPage;
