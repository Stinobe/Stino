import React from 'react'

import Layout from './layout'
import { withPrefix } from 'gatsby'

const Masthead = () => (
  <Layout>
    <div
      className="masthead"
      style={{
        backgroundImage: `url('${withPrefix('/img/masthead.png')}')`,
      }}
    >
      <div className="masthead__content">
        <h1>stino</h1>
        <p>
          Possibly your new favorite <nobr>JavaScript developer</nobr>
        </p>
      </div>
    </div>
  </Layout>
)

export { Masthead as default }
