import { render } from "@testing-library/react";
import React from "react";
import Dashboard from "../../Components/Dashboard";
import "@testing-library/jest-dom/extend-expect";

// import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";

describe("statistics-users-test", () => {
  it("statistics-users-success", async () => {
    render(<Dashboard />);
  });
});
