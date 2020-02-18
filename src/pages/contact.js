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
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-recaptcha="true"
          action="/thank-you"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label>
            Name:
            <input type="text" name="name" id="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" id="email" required />
          </label>
          <label>
            Subject:
            <input type="text" name="subject" id="subject" />
          </label>
          <label>
            Message:
            <textarea name="message" id="message" rows="5" required />
          </label>
          <button>Send</button>
        </form>
      </div>
    </div>
  </Layout>
)

export default ContactPage
