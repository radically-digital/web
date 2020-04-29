import React from "react"

import Layout from "../../components/Layout"
import Hero from "../../components/Hero"
import { QuoteForm } from "./QuoteForm"

const Quote = () => (
  <Layout
    pageClass="contact"
    title="Radically Digital - Contact us"
    description="Get in touch with the team at Radically Digital"
  >
    <Hero inverted={true}>
      <h1 className="hero__heading">Get a quote</h1>
    </Hero>
    <QuoteForm />
  </Layout>
)

export default Quote
