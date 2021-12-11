import { render } from "@testing-library/react";
import React from "react";
import CardUsers from "../../../Components/Cards/CardUsers";
import "@testing-library/jest-dom/extend-expect";

// import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";

describe("card-users-test", () => {
  it("card-users-success", async () => {
    render(<CardUsers />);
  });
});
