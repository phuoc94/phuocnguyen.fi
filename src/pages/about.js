import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layouts/layout"
import Seo from "../components/querys/seo"
import Image from "gatsby-image"

const title = "About me"
const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 540) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout pageTitle={title}>
      <div className="container">
        <Seo title={title} />
        <section className="mb-4">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            About Me
          </h2>

          <div className="row">
            <div className="col-md-6">
              <Image fluid={data.placeholderImage.childImageSharp.fluid} />
            </div>
            <div className="col-md-6">
              <h3>
                Hi there! My name is Phuoc NGUYEN and I am a junior full stack
                developer based in Turku, Finland.
              </h3>
              <p>
                Ever since I was a young boy, I have always been fascinated with
                the world of technology and how it serves and benefits humanity.
                My interest in technology was further developed when I decided
                to complete a vocational education in data processing in Turku
                Vocational Institute in 2015. I have always had a unique
                enthusiasm and eagerness to brush up my web development skills.
                That pushed me to take advantage of every opportunity I could
                lay my hands on. For example, I worked as a customer service
                agent and seller for two months in 2015 at ATK Service Oy; it is
                a computer maintenance and installation company. It was an
                interesting experience which gave me the chance to discover more
                about the joys and wonders of web development. Later on, I
                delved even more into this realm when I worked as a web
                developer at the University of Turku for six months and another
                six months in Turku Region TST in the same position.
              </p>
              <p>
                Now, as a junior full stack developer, I can perfectly tackle
                projects that involve both databases and building user-facing
                websites. In a nutshell, web development has always been a
                passion that no one can steal me from. My belief that my talent
                was embedded in the field of web development motivates me to
                constantly hone my skills to be a successful professional web
                developer. I am now eagerly looking for new job opportunities in
                my field that will help me develop my skills and grow my career.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage
