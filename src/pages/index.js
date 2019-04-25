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
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <>
      <section className="intro">
        <div className="header">
          <div className="headerpic col-md-12">
            <nav className="navbar navbar-expand">
              <div className="container">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a
                      style={{ color: "unset" }}
                      href="https://www.ueberdiespree.de"
                      className="nav-link"
                    >
                      ueberdiespree.de
                    </a>
                  </li>
                  <li className="nav-item">
                    <AnchorLink className="nav-link" href="#about">
                      about
                    </AnchorLink>
                  </li>
                  <li className="nav-item">
                    <AnchorLink className="nav-link" href="#contact">
                      contact
                    </AnchorLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="row white intro">
          <div className="col-md-12">
            <h2>Hi, my name is Ulrike Exner.</h2>
            <p className="mypar">I am a web developer from &#10084; Berlin.</p>
            <AnchorLink className="arrow-down" href="#about">
              <svg
                viewBox="0 4.9 70 35"
                style={{ enableBackground: "new 0 4.9 70 35" }}
              >
                <polyline
                  className="svg-stroke "
                  points="59.7,9.8 35,34.5 10.3,9.8"
                />
              </svg>
            </AnchorLink>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="row grey">
          <div className="col-md-12">
            <h2 id="h2">What I do</h2>
            <p className="mypar">
              In 2017 I finished a Master's degree in computer science from
              &nbsp;
              <a
                target="_blank"
                className="fancy-link"
                href="http://osmi.th-brandenburg.de/"
                rel="noopener noreferrer"
              >
                Brandenburg University of Applied Sciences
              </a>
              &nbsp; and I have project experience as a freelance web developer.
              For several years I have been working as a content and social
              media manager but have moved on to coding. Annually, I give talks
              for beginners in web development at &nbsp;
              <a
                target="_blank"
                className="fancy-link"
                href="https://www.informatica-feminale.de/"
                rel="noopener noreferrer"
              >
                Informatica Feminale
              </a>{" "}
              &nbsp; in Bremen to inspire more women to get into web
              development. Sometimes I produce audio podcasts for scientific
              purposes and I like &nbsp;
              <a
                className="fancy-link"
                target="_blank"
                href="https://rike.dev"
                rel="noopener noreferrer"
              >
                writing
              </a>
              . Currently I work as a full-time web developer with a focus on
              frontend technologies at&nbsp;
              <a
                target="_blank"
                className="fancy-link"
                href="https://www.iav.com/"
                rel="noopener noreferrer"
              >
                IAV
              </a>
              &nbsp; in Berlin. Technologies I have worked with include &#149;
              JavaScript &#149; Node.js &#149; HTML5 &#149; CSS3 &#149;
              Bootstrap &#149; React.js &#149; Vue.js &#149; GraphQL &#149;
              Angular &#149; Python &#149; Flask &#149; PostgreSQL &#149;
              MongoDB and others. Want to get in &nbsp;
              <a className="fancy-link" href="#contact">
                contact?
              </a>
            </p>

            <p className="mypar" />
          </div>
        </div>
        <div className="row white">
          <div className="col-md-12">
            <AnchorLink className="arrow-down" href="#contact">
              <svg
                viewBox="0 4.9 70 35"
                style={{ enableBackground: "new 0 4.9 70 35" }}
              >
                <polyline
                  className="svg-stroke "
                  points="59.7,9.8 35,34.5 10.3,9.8"
                />
              </svg>
            </AnchorLink>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="row grey">
          <div className="col-md-12 icondiv">
            <h2 id="h2">Contact</h2>
            <p className="mypar">
              If you'd like to connect, do not hesitate to drop a line to &nbsp;
              <a className="fancy-link" href="mailto:hello@ueberdiespree.de">
                hello@ueberdiespree.de
              </a>
              . Organizations and meetups I support or visit regularely
              include&nbsp;
              <a
                target="_blank"
                href="https://www.womenwhocode.com/berlin"
                className="fancy-link"
                rel="noopener noreferrer"
              >
                Women who code Berlin
              </a>
              , &nbsp;
              <a
                target="_blank"
                className="fancy-link"
                href="http://berlin.pyladies.com/"
                rel="noopener noreferrer"
              >
                Pyladies Berlin
              </a>
              , &nbsp;
              <a
                target="_blank"
                href="http://www.geekettes.io/cities/berlin/"
                className="fancy-link"
                rel="noopener noreferrer"
              >
                Geekettes Berlin
              </a>
              , &nbsp;
              <a
                target="_blank"
                href="https://www.informatica-feminale.de/"
                className="fancy-link"
                rel="noopener noreferrer"
              >
                Informatica Feminale Bremen
              </a>
              &nbsp; and more.
              <br />
              <br />
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:hello@ueberdiespree.de"
              >
                <img className="icon" src={mail} alt="E-Mail me" />
              </a>

              <a
                target="_blank"
                href="https://github.com/gitfrosh/"
                rel="noopener noreferrer"
              >
                <img className="icon" src={github} alt="Github" />
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https:/rike.dev/"
              >
                <img className="icon" src={wordpress} alt="Wordpress" />
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/ueberdiespree/"
                rel="noopener noreferrer"
              >
                <img className="icon" src={instagram} alt="Instagram" />
              </a>
              <a
                target="_blank"
                href="https://www.xing.com/profile/Ulrike_Exner4"
                rel="noopener noreferrer"
              >
                <img className="icon" src={xing} alt="Xing" />
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
