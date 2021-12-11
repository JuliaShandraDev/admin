import { render } from "@testing-library/react";
import React from "react";
import ModalComponent from "../../Components/ModalComponent";
import "@testing-library/jest-dom/extend-expect";

// import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";

describe("create-profile-test", () => {
  it("create-profile-success", async () => {
    render(<ModalComponent />);
  });
});
