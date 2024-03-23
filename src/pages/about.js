import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

// About page component
const AboutPage = () => {
  return (
    <Layout pageTitle="About LeeShin">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.<br/><br/></p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Page" />

// Export component
export default AboutPage