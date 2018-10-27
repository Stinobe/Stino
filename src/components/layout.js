// Import necessary libraries
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import 'reset-css'
import '../scss/style.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            title
            metatags {
              name
              content
            }
          }
        }
      }
    `}
    render={data => (
      <div className="site">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={data.site.siteMetadata.metatags}
        >
          <html lang="en" />
        </Helmet>
        {children}
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout as default }
