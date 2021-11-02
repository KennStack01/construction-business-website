import React from "react"
import { Link } from "gatsby"
import { RiPhoneFill } from "react-icons/ri"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Home/HeroSection"
import Mission from "../components/Home/Mission"
import ServicesList from "../components/Services/ServicesList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <HeroSection />

    <Link
      to="/contact"
      className="flex flex-row my-8 w-2/3 md:w-1/4 mx-auto justify-center text-center bg-sadi-blue-500 hover:bg-sadi-blue-400 text-sm md:text-xl text-white font-semibold p-2 rounded-md"
    >
      <RiPhoneFill className="my-auto text-2xl md:text-3xl mx-1" />
      <h5 className="my-auto mx-1">Contactez-nous</h5>
    </Link>
    <Mission />
    <ServicesList />
  </Layout>
)

export default IndexPage
