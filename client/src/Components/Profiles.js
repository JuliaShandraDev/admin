import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/profiles.module.scss";
import { Icon } from "@mui/material";
import { Navigate } from "react-router-dom";
import CardEdit from "./layout/CardEdit.js";
import ModalComponent from "./ModalComponent";

const Profiles = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [click, setClick] = useState(false);
  const [formData, setFormData] = useState({});

  // const deleteProfile = useCallback((user) => {
  //   console.log("!9!", user);
  //   fetch("/delete", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //     method: "DELETE",
  //   })
  //     .then((users) => users.json())
  //     .then((response) => {
  //       console.log(response);
  //       dispatch({ type: "INIT_USERS", payload: response.updateUser });
  //     });
  // }, []);

  const getUsers = useCallback(() => {
    fetch("/users", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((allUsers) => allUsers.json())
      .then((response) => {
        console.log(response.allUsers);
        dispatch({ type: "INIT_USERS", payload: response.allUsers });
      });
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={`${styles.wrapper_profiles}`}>
      <h1 className={styles.text}>Profiles:</h1>
      <div className={`row ${styles.profiles}`}>
        {user?.profiles.map((user) => (
          <CardEdit profileDisplay={user} />
        ))}
        {/* deleteProfile={deleteProfile} */}
        <div className={`col centered ${styles.card}`}>
          <button
            className={` ${styles.card_button}`}
            onClick={() => {
              setClick(!click);
              console.log(click);
            }}
          >
            <Icon fontSize="large">addcircle</Icon>
          </button>
          {click && <ModalComponent open={click} setOpen={setClick} />}
        </div>
      </div>
      {!user && <Navigate to="/login" />}
    </div>
  );
};

export default Profiles;
