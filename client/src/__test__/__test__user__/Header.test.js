import { render } from "@testing-library/react";
import React from "react";
import Header from "../../Components/Header";
import "@testing-library/jest-dom/extend-expect";

// import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";

describe("header-test", () => {
  it("header-success", async () => {
    render(<Header />);
  });
});
