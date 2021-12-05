import React, { useState, useCallback } from "react";
import {
  TextField,
  Icon,
  Buttton,
  Radio,
  FormControlLabel,
  Modal,
  FormControl,
  FormLabel,
} from "@mui/material";
import styles from "../styles/modalComponent.module.scss";
import { useDispatch, useSelector } from "react-redux";

const ModalComponent = ({ open, setOpen, profile }) => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  // const [click, setClick] = useState(false);
  const [formData, setFormData] = useState(profile ? profile : {});
  const [check, setCheck] = useState();

  const createProfile = useCallback(() => {
    fetch("/editUser", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user, profile: formData }),
      method: "PATCH",
    })
      .then((user) => user.json())
      .then((response) => {
        console.log(response);
        dispatch({ type: "LOGIN/REGISTER", payload: response.updatedUser });
      });
  }, [user, formData]);

  const editProfile = useCallback(() => {
    fetch("/editProfile", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        profile: formData,
        oldName: profile.name,
      }),
      method: "PATCH",
    })
      .then((user) => user.json())
      .then((response) => {
        console.log(response);
        dispatch({ type: "LOGIN/REGISTER", payload: response.updatedUser });
      });
  }, [user, formData, profile]);

  return (
    <Modal open={open} onClose={() => setOpen(!open)}>
      <div className={`col centered ${styles.wrapper_modal}`}>
        <div className={`col centered ${styles.modal}`}>
          <TextField
            type="text"
            label="name"
            value={formData?.name}
            variant="standard"
            placeholder="name:"
            className={styles.input}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <div className={`col ${styles.input}`}>
            <FormLabel component="legend">gender:</FormLabel>
            <div className="row sp_btw">
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    onChange={(e) => {
                      setFormData({ ...formData, gender: e.target.value });
                      setCheck("male");
                    }}
                    checked={check === "male"}
                  />
                }
                label="Male"
              />
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    onChange={(e) => {
                      setFormData({ ...formData, gender: e.target.value });
                      setCheck("female");
                    }}
                    checked={check === "female"}
                  />
                }
                label="Female"
              />
            </div>
          </div>

          <TextField
            type="date"
            value={formData?.birthdate}
            variant="standard"
            placeholder="birthday:"
            className={styles.input}
            onChange={(e) =>
              setFormData({ ...formData, birthdate: e.target.value })
            }
          />
          <TextField
            type="text"
            value={formData?.city}
            label="city"
            variant="standard"
            placeholder="city:"
            className={styles.input}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />

          <div className={`row sp_btw ${styles.input}`}>
            <button
              className={styles.button}
              onClick={() => {
                profile ? editProfile() : createProfile();
                setOpen(false);
              }}
            >
              <Icon>check</Icon>
            </button>
            <button className={styles.button} onClick={() => setOpen(false)}>
              <Icon>close</Icon>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;
