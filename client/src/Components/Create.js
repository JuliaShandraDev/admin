import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import styles from "../styles/create.module.scss";
import { Navigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../thunks";

const Create = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [click, setClick] = useState(false);
  const [formData, setFormData] = useState({ isAdmin: false });

  useEffect(() => {}, [formData]);

  return (
    <div className={`col centered ${styles.create}`}>
      <h1>Create your account</h1>
      <div className={`col centered ${styles.box_input}`}>
        <TextField
          id="standard-basic"
          type="text"
          label="Username"
          variant="standard"
          placeholder="Username"
          className={styles.input}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <TextField
          id="standard-basic"
          type="email"
          label="Email"
          variant="standard"
          placeholder="Email"
          className={styles.input}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <TextField
          id="standard-basic"
          type="password"
          label="Password"
          variant="standard"
          placeholder="Password"
          className={styles.input}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <div className={` row centered ${styles.box}`}>
          <div
            className={`${styles.box_checkbox}`}
            onClick={() => {
              setClick(!click);
              setFormData({ ...formData, isAdmin: !formData.isAdmin });
            }}
          >
            {click && <div className={styles.checkbox}></div>}
          </div>
          <p>is admin</p>
        </div>

        <button onClick={() => dispatch(register(user, formData))}>
          Sing up
        </button>

        <div className={`${styles.footer}`}>
          <span>If you have an account</span>
          <Link className={styles.link} to="/login">
            Sing in
          </Link>
        </div>

        {user && <Navigate to="/profiles" />}
      </div>
    </div>
  );
};

export default Create;
