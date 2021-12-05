import { combineReducers } from "redux";

import userReducer from "./user";
import usersReducer from "./users";
// import deleteReducer from "./delete";
// import tabReducer from "./tab";

const allReducers = combineReducers({
  user: userReducer,
  users: usersReducer,
  // deleteUser: deleteReducer,
  // tab: tabReducer,
});

export default allReducers;
