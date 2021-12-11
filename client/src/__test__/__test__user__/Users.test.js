import { render } from "@testing-library/react";
import React from "react";
import Users from "../../Components/Users";
import "@testing-library/jest-dom/extend-expect";

// import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";

describe("get-users-test", () => {
  it("get-users-success", () => {
    render(<Users />);
  });
});
