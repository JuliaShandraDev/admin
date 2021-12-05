import React from "react";
import styles from "../../styles/layout/cardEdit.module.scss";

const CardDashboard = () => {
  return (
    <div className={`row ${styles.wrapper_card}`}>
      <div className={`col centered ${styles.card}`}>
        <p>Users:</p>
        <p>Profiles:</p>
        <p>Profiles over 18 years old:</p>
      </div>
    </div>
  );
};

export default CardDashboard;
