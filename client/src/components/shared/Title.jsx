import React from "react";
import { Helmet } from "react-helmet-async";

function Title({ title = "Chat", description = "Chat Application" }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default Title;
