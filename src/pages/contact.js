import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/querys/seo"
import ReCAPTCHA from "react-google-recaptcha"

const title = "Contact me"
const ContactPage = () => (
  <Layout pageTitle={title}>
    <SEO title={title} />
    <div className="contact">
      <h1>{title}</h1>
      <div className="form">
        <form
          name="JSX Form"
          method="POST"
          data-netlify="true"
          data-netlify-recaptcha="true"
          action="/thank-you"
        >
          <input type="hidden" name="form-name" value="JSX Form" />
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
          <div data-netlify-recaptcha="true"></div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </Layout>
)

export default ContactPage
