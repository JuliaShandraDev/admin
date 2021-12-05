import { Icon } from "@mui/material";
import { Model } from "mongoose";
import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/layout/cardEdit.module.scss";
import ModalComponent from "../ModalComponent";

const CardEdit = ({ profileDisplay }) => {
  const user = useSelector((store) => store.user);
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);

  // const createProfile = useCallback(() => {
  //   fetch("/createProfile", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //     method: "PATCH",
  //   })
  //     .then((user) => user.json())
  //     .then((response) => {
  //       console.log(response);
  //       // dispatch({ type: "LOGIN/REGISTER", payload: response.updatedUser });
  //     });
  // }, []);

  // const editProfile = useCallback(() => {
  //   fetch("/editProfile", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email: user.email }),
  //     method: "PATCH",
  //   })
  //     .then((user) => user.json())
  //     .then((response) => {
  //       console.log(response);
  //       // dispatch({ type: "LOGIN/REGISTER", payload: response.updatedUser });
  //     });
  // }, [user]);

  const deleteProfile = useCallback(
    (name) => {
      console.log("!9!", user);
      fetch("/deleteProfile", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email, name }),
        method: "DELETE",
      })
        .then((users) => users.json())
        .then((response) => {
          console.log(response);
          dispatch({ type: "LOGIN/REGISTER", payload: response.updatedUser });
        });
    },
    [user]
  );

  //  это сдесь нужно???

  return (
    <div className={`row ${styles.wrapper_card}`}>
      <div className={`col ${styles.card}`}>
        <div className="col centered">
          <p>{profileDisplay.name}</p>
          <p>{profileDisplay.gender}</p>
          <p>{profileDisplay.birthdate}</p>
          <p>{profileDisplay.city}</p>
        </div>

        <div className={`row ${styles.card_button}`}>
          <button
            className={`row centered ${styles.button_left}`}
            onClick={() => {
              setClick(!click);
            }}
          >
            Edit
            <Icon style={{ margin: "5px" }} fontSize="small">
              edit
            </Icon>
          </button>
          <button
            className={`row centered ${styles.button_right}`}
            onClick={() => deleteProfile(profileDisplay.name)}
          >
            Delete
            <Icon style={{ margin: "5px" }} fontSize="small">
              delete
            </Icon>
          </button>
        </div>
      </div>
      {click && (
        <ModalComponent
          open={click}
          setOpen={setClick}
          profile={profileDisplay}
        />
      )}
    </div>
  );
};

export default CardEdit;
