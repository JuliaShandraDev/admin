import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardEdit from "./layout/CardEdit.js";
import styles from "../styles/dashboard.module.scss";

const Dashboard = () => {
  const users = useSelector((store) => store.users);

  const countProfiles = useCallback(() => {
    return users.reduce((acc, user) => (acc += user.profiles.length), 0);
  }, [users]);

  const countAdultUsers = useCallback(() => {
    return users?.reduce(
      (acc, user) =>
        (acc += user.profiles.filter(
          (profile) =>
            +new Date(Date.now()).getFullYear() -
              +profile.birthdate.split("-")[0] >
            17
        ).length),
      0
    );
  }, [users]);

  useEffect(() => {
    console.log(countAdultUsers());
  }, []);

  return (
    <div className={`${styles.wrapper_dashboard}`}>
      <h1 className={styles.text}>Dashboard:</h1>
      {users && (
        <div className={`row ${styles.dashboard}`}>
          <div className={styles.card}>
            <p>Users: {users?.length}</p>
          </div>
          <div className={styles.card}>
            <p>Profiles: {users && countProfiles()}</p>
          </div>
          <div className={styles.card}>
            <p>Over 18: {users && countAdultUsers()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
