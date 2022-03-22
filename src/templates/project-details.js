import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/project-details.module.css"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featured } = data.markdownRemark.frontmatter
  return (
    <>
      <Layout>
        <div className={styles.details}>
          <h2>{title}</h2>
          <h3>{stack}</h3>
          <div className={styles.featured}>
            <GatsbyImage
              image={featured.childImageSharp.gatsbyImageData}
              alt="featured"
            />
          </div>
          <div
            className={styles.html}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featured {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              transformOptions: { grayscale: true }
            )
          }
        }
      }
    }
  }
`
