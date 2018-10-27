import React from 'react'

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="page__wrapper">
        <h2>About me</h2>
        <p>
          I've been into webdevelopment for quite a long time now and what
          intrigues me the most is the way how all the technologies change over
          time. Whenever you think “This is it, now we‘ve reached the limit of
          what we can do“ something new is comming up, untill the point where
          you start to understand “This is nice, I'm wondering what'll be next".
        </p>
        <p>
          That's the reason I'm so passionated about development, and I have to
          admin, I do love JavaScript. There's so much you can do with it.
          Thanks to the community, a ton of frameworks (Angular, React, Vue,
          &hellip;), and an ever evolving language we can create apps like the
          world has never seen before.
        </p>
        <p>
          Want to know a bit more about me next to JavaScript development? Just
          visit my{' '}
          <a href="https://vanwijmeersch.com" rel="norefferer" target="_blank">
            curriculum vitae
          </a>
          .
        </p>
      </div>
    </section>
  )
}

export { AboutMe as default }
