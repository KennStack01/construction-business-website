import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFound = () => (
  <Layout>
    <SEO title="Not Found" />
    <p className="text-sadi-blue-600 text-center text-2xl font-bold">
      Page Not Found 👋
    </p>
    <Link
      to="/"
      className="font-semibold text-center p-2 rounded-sm bg-sadi-blue-700"
    >
      Cliquer ici pour à la Page D'Accueil
    </Link>
  </Layout>
)

export default NotFound
