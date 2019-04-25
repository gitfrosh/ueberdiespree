import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer className="py-5 bg-dark">
    <div className="container">
      <p className="m-0 text-center text-white">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        &copy; 2017 All rights reserved. |<a href="/impressum">Impressum</a>
      </p>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
