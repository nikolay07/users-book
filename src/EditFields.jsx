/* eslint-disable react/prop-types */
import React from "react";
import { Link, Redirect, useLocation } from "react-router-dom";

const EditFields = () => {
  const location = useLocation();
  const dataEdit = location.edit;
  if (!location.edit) return <Redirect to="/" />;

  return (
    <div className="page__content">
      <div> Edit fields</div>
      <div>{dataEdit.name}</div>
      <button type="button">
        <Link to="/">Back contact list</Link>
      </button>
    </div>
  );
};

export default EditFields;
