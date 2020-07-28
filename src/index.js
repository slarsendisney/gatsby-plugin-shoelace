import React from "react";
import { Helmet } from "react-helmet";

export const wrapPageElement = ({ element }) => (
  <>
    <Helmet>
      <link rel="stylesheet" href="/shoelace.css" />
      <script type="module" src="/shoelace.esm.js"></script>
    </Helmet>
    {element}
  </>
);
