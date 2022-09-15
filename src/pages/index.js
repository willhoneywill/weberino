import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p className="text-3xl font-bold">Freelance Web Developer</p>
      <StaticImage alt="Static Image" src="https://picsum.photos/800/300/" />
    </Layout>
  )
}

export const Head = () => <title>Weberino - React Developer</title>

export default IndexPage