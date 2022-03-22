import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/projects.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Blog({ data }) {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes
  return (
    <>
      <Layout>
        <div className={styles.portfolio}>
          <h2>Blogs</h2>
          <h3>Give them a read!!</h3>
          <div className={styles.projects}>
            {projects.map(project => (
              <Link to={"/blog/" + project.frontmatter.slug} key={project.id}>
                <div>
                  <GatsbyImage
                    image={getImage(
                      project.frontmatter.thumb.childImageSharp.gatsbyImageData
                    )}
                    alt="Banner"
                  />
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query ProjectPage {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
        id
      }
    }
  }
`
