import React, { useState, useCallback, useEffect } from "react";
import { TextField } from "@mui/material";
import styles from "../styles/sing.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";

const Sing = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});

  const register = useCallback(() => {
    fetch("/login", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      method: "POST",
    })
      .then((user) => user.json())
      .then((user) => {
        dispatch({ type: "LOGIN/REGISTER", payload: user.createdUser });
      });
  }, [formData]);

  useEffect(() => {}, [formData]);

  return (
    <div className={`col centered ${styles.sing}`}>
      <div className={styles.header}>
        <h1>Sing in</h1>
      </div>

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
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      <button
        onClick={() => {
          register();
        }}
      >
        Sing in
      </button>

      <div className={`${styles.footer}`}>
        <span>If you don`t have an account</span>
        <Link className={styles.link} to="/">
          Sing up
        </Link>
      </div>

      {user && <Navigate to="/profiles" />}
    </div>
  );
};

export default Sing;
