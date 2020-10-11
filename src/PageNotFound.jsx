/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="page__content">
      <span role="img">😢</span>
      <Link to="/">Back home</Link>
    </div>
  );
}

export default PageNotFound;
