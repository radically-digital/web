import React from "react"

import SEO from "./SEO"
import SiteHeader from "./SiteHeader"
import SiteFooter from "./SiteFooter"

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <SEO title={title} description={description} />

      <SiteHeader />

      <main>
        <div>{children}</div>
      </main>

      <SiteFooter />
    </div>
  )
}

export default Layout
