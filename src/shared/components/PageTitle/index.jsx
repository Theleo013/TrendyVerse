import React from "react";
import Styles from "@/shared/components/PageTitle/pageTitle.module.scss";

const PageTitle = ({ headingTitle, description }) => {
  return (
    <div className={Styles.pageTitleContainer}>
      <div className={Styles.headingtitleWrapper}>
        <span className={Styles.rectangle} />
        <span className={Styles.headingTitle}>{headingTitle}</span>
      </div>
      <div className={Styles.descriptionWrapper}>
        <h3>{description}</h3>
      </div>
    </div>
  );
};

export default PageTitle;
