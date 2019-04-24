import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/*     <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
    <>
      <section className="intro">
        <div className="header">
          <div className="headerpic col-md-12">
            <nav className="navbar navbar-expand">
              <div className="container">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link">ueberdiespree.de</a>
                  </li>
                  <li className="nav-item">
                  <AnchorLink className="nav-link" href='#about'>about</AnchorLink>
                  </li>
                  <li className="nav-item">
                  <AnchorLink className="nav-link" href='#contact'>contact</AnchorLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="row white intro">
          <div className="col-md-12">
            <h2>Hi, my name is Ulrike Exner.</h2>
            <p className="mypar">I am a web developer from  &#10084; Berlin.</p>

            <a href="#about" className="arrow-down">
              <svg
                viewBox="0 4.9 70 35"
                style={{enableBackground:'new 0 4.9 70 35'}}
              >
                <polyline
                  className="svg-stroke "
                  points="59.7,9.8 35,34.5 10.3,9.8"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="row grey">
          <div className="col-md-12">
            <h2 id="h2">What I do</h2>
            <p className="mypar">
              In 2017 I finished a Master's degree in computer science from
              <a
                target="_blank"
                className="fancy-link"
                href="http://osmi.th-brandenburg.de/"
                rel="noreferrer"
              >
                Brandenburg University of Applied Sciences
              </a>
              and have project experiences as a freelance web developer. For
              several years I have been working as a content and social media
              manager but have moved on to the programmer's world. Annually, I
              give talks for beginners in web development at
              <a
                target="_blank"
                className="fancy-link"
                href="https://www.informatica-feminale.de/"
                rel="noreferrer"
              >
                Informatica Feminale
              </a>
              in Bremen to inspire more women to get into coding. Besides I
              produce audio podcasts for scientific purposes, e.g. for the
              <a
                target="_blank"
                className="fancy-link"
                href="http://berlinerkolleg.com/"
                rel="noreferrer"
              >
                Berlin Center for Cold War Studies
              </a>
              and I like
              <a
                className="fancy-link"
                target="_blank"
                href="http://rike.dev"
                rel="noreferrer"
              >
                writing
              </a>
              . Currently I work as a full-time web developer with a focus on
              frontend technologies at
              <a
                target="_blank"
                className="fancy-link"
                href="https://www.iav.com/"
                rel="noreferrer"
              >
                IAV
              </a>
              in Berlin. Stacks I have worked with include &#149; HTML5 &#149;
              CSS3 &#149; JavaScript &#149; Bootstrap &#149; React &#149;
              AngularJS &#149; Python &#149; Flask &#149; nodeJs &#149; and
              others. Want to get in
              <a className="fancy-link" href="#contact">
                contact?
              </a>
            </p>

            <p className="mypar" />
          </div>
        </div>
        <div className="row white">
          <div className="col-md-12">
            <a href="#contact" className="arrow-down">
              <svg
                viewBox="0 4.9 70 35"
                style={{enableBackground: 'new 0 4.9 70 35'}}
              >
                <polyline
                  className="svg-stroke "
                  points="59.7,9.8 35,34.5 10.3,9.8"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="row grey">
          <div className="col-md-12 icondiv">
            <h2 id="h2">Contact</h2>
            <p className="mypar">
              If you'd like to connect, do not hesitate to drop a line to
              <a className="fancy-link" href="mailto:hello@ueberdiespree.de">
                hello@ueberdiespree.de
              </a>
              . Organizations and meetups I support or visit regularely include
              <a
                target="_blank"
                href="https://www.womenwhocode.com/berlin"
                className="fancy-link"
              >
                Women who code Berlin
              </a>
              ,
              <a
                target="_blank"
                className="fancy-link"
                href="http://berlin.pyladies.com/"
              >
                Pyladies Berlin
              </a>
              ,
              <a
                target="_blank"
                href="http://www.geekettes.io/cities/berlin/"
                className="fancy-link"
              >
                Geekettes Berlin
              </a>
              ,
              <a
                target="_blank"
                href="https://www.informatica-feminale.de/"
                className="fancy-link"
              >
                Informatica Feminale Bremen
              </a>
              and more.
              <br />
              <br />
            </p>
            <p>
              <a target="_blank" href="mailto:hello@ueberdiespree.de">
                <img
                  className="icon"
                  src="images/icons/001-at-symbol-inside-a-circle.svg"
                  alt="E-Mail me"
                />
              </a>

              <a
                target="_blank"
                href="https://github.com/gitfrosh/"
                rel="noreferrer"
              >
                <img
                  className="icon"
                  src="images/icons/004-circle.svg"
                  alt="Github"
                />
              </a>

              <a target="_blank" href="https:/rike.dev/">
                <img
                  className="icon"
                  src="images/icons/003-wordpress-logo.svg"
                  alt="Wordpress"
                />
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/ueberdiespree/"
                rel="noreferrer"
              >
                <img
                  className="icon"
                  src="images/icons/002-instagram-logo.svg"
                  alt="Instagram"
                />
              </a>
              <a
                target="_blank"
                href="https://www.xing.com/profile/Ulrike_Exner4"
                rel="noreferrer"
              >
                <img
                  className="icon"
                  src="images/icons/005-xing-icomoon.svg"
                  alt="Xing"
                />
              </a>
            </p>
          </div>
        </div>
      </section>
      <footer className="py-5 bg-dark">
            <div className="container">
              <p className="m-0 text-center text-white">
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
                &copy; 2017 All rights reserved. |
                <a href="impressum.html">Impressum</a>
              </p>
            </div>
          </footer>
    </>
  </Layout>
)

export default IndexPage
