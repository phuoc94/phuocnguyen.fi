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
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div className="form-input">
            <label>Full Name</label>
            <input name="name" placeholder="Enter Your Name" type="text" />
          </div>
          <div className="form-input">
            <label>Email</label>
            <input name="email" placeholder="Enter Your Emai" type="email" />
          </div>
          <div className="form-input">
            <label>message</label>
            <textarea
              name="message"
              placeholder="Enter Your Message"
            ></textarea>
          </div>

          <button>Send</button>
        </form>
      </div>
    </div>
  </Layout>
)

export default ContactPage
