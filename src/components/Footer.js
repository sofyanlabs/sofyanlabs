import React from 'react'
// import { Link } from 'gatsby'

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 3,
          margin: '0% 25% 0% 25%',
          width: '50%'
      }}
  />
);

const Footer = class extends React.Component {
  render() {
    return ( 
      <footer className="footer">
        <ColoredLine color="#4285f4" />

          <div className="content has-text-centered">
            <h3 className="has-text-weight-bold is-size-2"
                  style={{ marginTop : '40px'}}>
                      Sofyanlabs.
            </h3>
            <p className="is-size-4">I'm a front-end developer who understands and can actually build web/mobile apps from idea to a scalable product.
            </p>
            <div className="wrap"
            style={{
              justifyContent: 'center'
            }}>
              <a className="btn" href="https://api.whatsapp.com/send?phone=6281315104352">
                Contact Me
              </a>
            </div>
          </div>

      </footer>
    )
  }
}

export default Footer
