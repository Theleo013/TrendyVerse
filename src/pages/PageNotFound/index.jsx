import React from "react";
import Styles from "@/pages/PageNotFound/notFound.module.scss";
import { Link } from "react-router-dom";
import { urls } from "@/shared/urls";
const NotFound = () => {
  return (
    <div className={Styles.notFoundContainer}>
      <h1>404 Not Found</h1>
      <p>Your visited page not found. You may go home page</p>
      <Link to={urls.HOME}>Back to Home page</Link>
    </div>
  );
};

export default NotFound;
