import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// About page component
const AboutPage = () => {
  return (
    <Layout pageTitle="About LeeShin">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.<br/><br/></p>
    </Layout>
  )
}

export const Head = () => (
    <>
        <title>About LeeShin</title>
        <meta name="description" content="Your description" />
    </>
)

// Export component
export default AboutPage