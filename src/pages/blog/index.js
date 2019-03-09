import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Blog from '../../img/undraw_content_vbqo.svg'

export default class BlogIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column">
                <img src={Blog} alt="Blog" style={{ width: '20em', height: '20em', float: 'right' }} />
                  <h1 className="has-text-weight-bold is-size-2 is">
                    Latest Blog
                  </h1>
                </div>
              </div>
            </div>
              <BlogRoll />
            </div>
        </section>
      </Layout>
    )
  }
}
