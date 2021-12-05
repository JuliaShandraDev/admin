import "./App.scss";
import React, { useState, useEffect, useCallback } from "react";

import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Sing from "./Components/Sing";
import Create from "./Components/Create";
import Users from "./Components/Users";
import Profiles from "./Components/Profiles";
import CardEdit from "./Components/layout/CardEdit.js";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";

function App() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  // const tab = useSelector((store) => store.tab);

  useEffect(() => {
    console.log(user);
  }, [user]);

  // useEffect(() => {
  //   dispatch({
  //     type: "LOGIN/REGISTER",
  //     payload: localStorage.getItem("user")
  //       ? JSON.parse(localStorage.getItem("user"))
  //       : [],
  //   });

  //   useEffect(() => {
  //     localStorage.setItem("user", JSON.stringify(user.user));
  //   }, [user.user]);

  useEffect(() => {
    user &&
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, createdAt: new Date().getMonth() })
      );
  }, [user]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const localUser = JSON.parse(localStorage.getItem("user"));
      +localUser?.createdAt === +new Date(Date.now()).getMonth() &&
        dispatch({
          type: "LOGIN/REGISTER",
          payload: localUser,
        });
    }
  }, []);

  return (
    <Router>
      <div className="col wrapper">
        {user && <Header />}

        <Routes>
          <Route path="/" element={<Create />}></Route>

          <Route path="/login" element={<Sing />}></Route>

          <Route path="/profiles" element={<Profiles />}></Route>

          <Route path="/dashboard" element={<Dashboard />}></Route>

          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
