import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/profiles.module.scss";
import { Icon } from "@mui/material";
import { Navigate } from "react-router-dom";
import CardEdit from "./layout/CardEdit.js";
import ModalComponent from "./ModalComponent";
import { getUsers } from "../thunks";

const Profiles = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [click, setClick] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className={`${styles.wrapper_profiles}`}>
      <h1 className={styles.text}>Profiles:</h1>
      <div className={`row ${styles.profiles}`}>
        {user?.profiles.map((user) => (
          <CardEdit profileDisplay={user} />
        ))}
        <div className={`col centered ${styles.card}`}>
          <button
            className={` ${styles.card_button}`}
            onClick={() => {
              setClick(!click);
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
