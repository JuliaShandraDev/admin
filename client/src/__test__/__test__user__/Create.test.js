import { render } from "@testing-library/react";
import React from "react";
import Create from "../../Components/Create";
import "@testing-library/jest-dom/extend-expect";

// import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";

describe("create-user-test", () => {
  it("create-user-success", async () => {
    render(<Create />);
  });
});
