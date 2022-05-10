import React from "react"
import Layout from "./Layout"
import Header from "./Header"
import Hero1 from "./Hero1"
import About from "./About"
import Footer from "./Footer"
import Services from "./Services"

export default function LandingPage1({ services, footerLinks }) {
  return (
    <Layout pageTitle="Landing Page Template 1 in Next.js">
      <Header />
      <Hero1 />
      <Services services={services} />
      <About />
      <Footer links={footerLinks} />
    </Layout>
  )
}
