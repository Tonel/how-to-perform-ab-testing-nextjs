import React from "react"
import Layout from "./Layout"
import Header from "./Header"
import Hero2 from "./Hero2"
import About from "./About"
import Footer from "./Footer"
import Services from "./Services"

export default function LandingPage2({ services, footerLinks }) {
  return (
    <Layout pageTitle="Landing Page Template 2 in Next.js" className={"landing-page-2"}>
      <Header />
      <Hero2 />
      <Services services={services} />
      <About />
      <Footer links={footerLinks} />
    </Layout>
  )
}
