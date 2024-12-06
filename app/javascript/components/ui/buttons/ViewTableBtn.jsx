import React from "react";
import { Link } from "react-router-dom";

const ViewTableBtn = ({path}) => (
  <Link to={path} className="btn btn-primary btn-sm">
    View Table
  </Link>
);

export default ViewTableBtn;