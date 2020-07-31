import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO
        title="404 Error"
        description="404 error on Joshua Palamuttam's Portfolio Site, no such page exists"
      />
      <main className="error-page">
        <div className="error-container">
          <h1>Sorry this page does not exist</h1>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
