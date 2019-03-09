import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
// import Features from '../components/Features'
import Hello from '../img/undraw_hello_aeia.svg'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  title,
  subheading,
}) => {
    return (
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">

                  <div className="columns">
                    <div className="column">
                      <h1 className="has-text-weight-bold is-size-2">
                        {title}
                      </h1>
                      <h3 className="has-text-weight-bold is-size-5">
                        {subheading}
                      </h3>
                    </div>

                    <div className="column">
                      <img src={Hello} alt="Hello" style={{ width: '18em', height: '18em', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                    </div>
                  </div>

                   <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest Blog
                    </h3>
                    <BlogRoll />
                    <div className="column is-12">
                      <div className="wrap  is-pulled-right">
                        <Link className="btn" to="/blog">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
    </div>);
  }

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
