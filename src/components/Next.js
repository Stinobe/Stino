import React from 'react'

const Next = () => {
  return (
    <section className="next">
      <div className="page__wrapper">
        <h2>So what's up next?</h2>
        <p>
          Well, after working &amp; testing with several{' '}
          <em>static site genrators</em> I'm going for{' '}
          <a href="https://www.gatsbyjs.org/" rel="noreferrer" target="_blank">
            Gatsby
          </a>
          , and I'm working very hard to get my blogposts up here.
        </p>
      </div>
    </section>
  )
}

export { Next as default }
