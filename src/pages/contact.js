import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/querys/seo"

const title = "Contact me"
const ContactPage = () => (
  <Layout pageTitle={title}>
    <SEO title={title} />
    <div className="contact">
      <h1>{title}</h1>
      <div className="form">
        <form
          name="recontact"
          method="POST"
          data-netlify-recaptcha="true"
          data-netlify="true"
        >
          <p>
            <label>
              Email: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <div data-netlify-recaptcha="true"></div>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  </Layout>
)

export default ContactPage
