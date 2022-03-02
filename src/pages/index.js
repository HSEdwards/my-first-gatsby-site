import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This is a webpage dedicated to some of the shows and movies that have brough me some joy.</p>
      <StaticImage
        alt="A water color picture of a deep blue police box flying in space. It is known as the TARDIS"
        //src="https://i.pinimg.com/originals/01/26/5a/01265af8dc818dd538cb50cac2f7d92c.jpg"
        src="../images/tardis_falling_lights.jpg"
        />
    </Layout>
  )
}

export default IndexPage