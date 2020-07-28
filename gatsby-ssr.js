import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="dns-prefetch preconnect"
      key="preconnect-unpkg"
      href="https://unpkg.com"
    ></link>,
  ]);
};
