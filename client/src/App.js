import "./App.scss";
import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import SingIn from "./Components/SingIn";
import Create from "./Components/Create";
import Users from "./Components/Users";
import Profiles from "./Components/Profiles";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";

function App() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {}, [user]);

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

          <Route path="/login" element={<SingIn />}></Route>

          <Route path="/profiles" element={<Profiles />}></Route>

          <Route path="/dashboard" element={<Dashboard />}></Route>

          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
