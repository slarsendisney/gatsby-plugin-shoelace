import React from "react";
import { withPrefix } from "gatsby";

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <link
      key="shoelace-css"
      rel="stylesheet"
      href={withPrefix("shoelace/shoelace.css")}
    ></link>,
    <script
      type="module"
      key="shoelacejs"
      src={withPrefix("shoelace/shoelace.esm.js")}
    ></script>,
  ]);
};
