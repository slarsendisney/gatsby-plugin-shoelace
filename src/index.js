import React from "react";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
export const wrapPageElement = ({ element }) => (
  <>
    <Helmet>
      <script src={withPrefix("shoelace.esm.js")} type="module" />
    </Helmet>
    {element}
  </>
);
