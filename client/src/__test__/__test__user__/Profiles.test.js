import { render } from "@testing-library/react";
import React from "react";
import Profiles from "../../Components/Profiles";
import "@testing-library/jest-dom/extend-expect";

import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";

describe("profiles-test", () => {
  it("profiles-success", async () => {
    render(<Profiles />);
  });
});
