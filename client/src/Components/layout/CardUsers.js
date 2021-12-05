import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/layout/cardUsers.module.scss";

const CardUsers = ({ userToDisplay }) => {
  const users = useSelector((store) => store.users);

  return (
    <div className={`row ${styles.wrapper_card}`}>
      <div className={`col centered ${styles.card}`}>
        <p>{userToDisplay.name}</p>
        <p>{userToDisplay.email}</p>
        <p>Quantity: {userToDisplay.profiles.length}</p>
      </div>
    </div>
  );
};

export default CardUsers;
