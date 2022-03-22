import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  console.log(data)
  return (
    <>
      <Layout>
        <section className={styles.header}>
          <div>
            <h2>Hello World</h2>
            <h3>Hello & World</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero
              incidunt voluptas, at enim fuga temporibus nostrum perspiciatis
            </p>
            <Link className={styles.btn} to="/blog">
              My Blogs
            </Link>
          </div>
          {/* <img src="heroImg.svg" alt="" style={{ maxWidth: "100%" }} /> */}
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            alt="banner"
          />
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "heroImage.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
