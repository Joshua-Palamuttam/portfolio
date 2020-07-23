import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const {
    info,
    Language,
    Framework,
    Tools,
    Certifications,
    title,
    image,
  } = nodes[0]
  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              <h4>Languages:</h4>{" "}
              {Language.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
            <br></br>
            <div className="about-stack">
              <h4>Frameworks:</h4>{" "}
              {Framework.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
            <br></br>
            <div className="about-stack">
              <h4>Tools:</h4>{" "}
              {Tools.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
            <br></br>
            <div className="about-stack">
              <h4>Certifications:</h4>{" "}
              {Certifications.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        Language {
          id
          title
        }
        Certifications {
          id
          title
        }
        Tools {
          id
          title
        }
        Framework {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
