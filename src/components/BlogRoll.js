import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class BlogRoll extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    
    return (
      <div className="columns is-multiline">
      {posts && (posts
          .map(({ node: post }) => (
            <div
              className="is-parent column is-6"
              key={post.id}
            >
            <article className="card is-child">
              <p>
                <Link className="title has-text-primary is-size-4" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
                <br />
                <span className="subtitle is-size-5 is-block">{post.frontmatter.date}</span>
              </p>
              <p>
                {post.excerpt}
                <br />
                <br />
                  <div className="wrap">
                    <Link className="btn" to={post.fields.slug}>
                      Keep Reading
                    </Link>
                  </div>
              </p>
              </article>
            </div>
          )))}
          </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
      ) {
        edges {
          node {
            excerpt(pruneLength: 100)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
    `}
    render={(data, count) => (
      <BlogRoll data={data} count={count} />
    )}
  />
)
