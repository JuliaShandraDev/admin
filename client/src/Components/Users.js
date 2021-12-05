import React, { useCallback, useEffect, useState } from "react";
import CardUsers from "./layout/CardUsers";
import styles from "../styles/users.module.scss";
import { useSelector, useDispatch } from "react-redux";

const Users = () => {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  return (
    <div className={`${styles.wrapper_users}`}>
      <h1 className={styles.text}>Users:</h1>
      <div className={`row ${styles.users}`}>
        {users?.map((user) => (
          <CardUsers userToDisplay={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
