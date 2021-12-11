import { render } from "@testing-library/react";
import React from "react";
import CardEdit from "../../../Components/Cards/CardEdit";
import "@testing-library/jest-dom/extend-expect";

// import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";

describe("create-user-test", () => {
  it("card-edit-success", async () => {
    render(<CardEdit />);
  });
});
