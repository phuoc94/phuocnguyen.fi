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
        <form name="tcontact" method="POST" data-netlify="true">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Your Role:{" "}
              <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  </Layout>
)

export default ContactPage
