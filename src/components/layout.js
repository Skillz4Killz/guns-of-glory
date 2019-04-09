/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
        </div>
        <footer
          className="footer"
          bottomthreshold={50}
          style={{
            backgroundColor: "#050E19",
            padding: "1rem",
            fontSize: "14px",
            fontFamily: "Helvetica",
            color: "white",
            textAlign: "center",
            bottom: "0px",
            width: "100%",
            marginTop: "15  px",
          }}
        >
          <p>© {new Date().getFullYear()}, Copyright GoGHub</p>
          <p>
            GoGHub is not affiliated or part of Guns of Glory. All Guns of Glory
            copyrights and art assets belong to Guns of Glory.
          </p>
          Made by <a href="https://discord.gg/rWMuMdk">Skillz4Killz</a> and
          {"  "}
          <a href="https://twitter.com/AngeloCant1">AngeloC</a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
