import React from "react"
import { Helmet } from "react-helmet"

export const wrapPageElement = ({ element }) => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@shoelace-style/shoelace@2.0.0-beta.8/dist/shoelace/shoelace.css"
      />
      <script
        type="module"
        src="https://unpkg.com/@shoelace-style/shoelace@2.0.0-beta.8/dist/shoelace/shoelace.esm.js"
      ></script>
    </Helmet>
    {element}
  </>
)
