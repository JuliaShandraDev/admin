import React, { useState } from "react";
import {
  TextField,
  Icon,
  Radio,
  FormControlLabel,
  Modal,
  FormLabel,
} from "@mui/material";
import styles from "../styles/modalComponent.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { createProfile, editProfile } from "../thunks";

const ModalComponent = ({ open, setOpen, profile }) => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(profile ? profile : {});
  const [check, setCheck] = useState();

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
                profile
                  ? dispatch(editProfile(user, formData, profile))
                  : dispatch(createProfile(user, formData));
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
