import React from "react"
import Footer from "../components/footer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AnchorLink from "react-anchor-link-smooth-scroll"
import instagram from "../images/icons/002-instagram-logo.svg"
import xing from "../images/icons/005-xing-icomoon.svg"
import wordpress from "../images/icons/003-wordpress-logo.svg"
import github from "../images/icons/004-circle.svg"
import mail from "../images/icons/001-at-symbol-inside-a-circle.svg"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `web development`,
        `frontend`,
        `react`,
        `Ulrike Exner`,
        `Berlin`,
      ]}
    />
    <>
      <section className="intro">
        <div className="header">
          <div className="headerpic col-md-12">
          </div>
        </div>
        <div className="row white intro">
          <div className="col-md-12">
            <h2><em>ueberdiespree</em>.de</h2>
            <p className="mypar">
              is the digital home of ulrike (or just <em>rike</em>) and you can find me here: <br />
              #<a
                target="_blank"
                href="https://rike.dev/"
                rel="noopener noreferrer"
              >
                rike.dev
              </a>
              {" "}
             #<a
                target="_blank"
                href="https://github.com/gitfrosh/"
                rel="noopener noreferrer"
              >
                github
              </a>
              {" "}

              #<a
                target="_blank"
                href="https://www.instagram.com/ueberdiespree/"
                rel="noopener noreferrer"
              >
                instagram
              </a>
              {" "}

              #<a
                target="_blank"
                href="https://www.xing.com/profile/Ulrike_Exner4"
                rel="noopener noreferrer"
              >
                xing
              </a>
            </p>
           
          </div>
        </div>
      </section>
      <Footer />
    </>
  </Layout>
)

export default IndexPage
