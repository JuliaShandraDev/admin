import { render } from "@testing-library/react";
import React from "react";
import Sing from "../../Components/SingIn";
import "@testing-library/jest-dom/extend-expect";

// import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";

describe("sing-user-test", () => {
  it("sing-user-success", async () => {
    render(<Sing />);
  });
});
