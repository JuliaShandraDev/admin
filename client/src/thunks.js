// export const register = (user) => {
//   return async (dispatch) => {
//     fetch("/registration", {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//       method: "POST",
//     })
//       .then((user) => user.json())
//       .then((user) => {
//         console.log(user);
//         dispatch({ type: "LOGIN/REGISTER", payload: user.createdUser });
//       });
//   };
// };
// // и на синг такой же фетч?

// // user ??? instend of fromData

// export const getUsers = () => {
//   return (dispatch) => {
//     fetch("/users", {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       method: "GET",
//     })
//       .then((allUsers) => allUsers.json())
//       .then((response) => {
//         console.log(response.allUsers);
//         dispatch({ type: "INITUSERS", payload: response.allUsers });
//       });
//   };
// };

// export const deleteUsers = () => {
//   return (dispatch) => {
//     fetch("/delete", {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       method: "DELETE",
//     })
//       .then((oneUsers) => oneUsers.json())
//       .then((response) => {
//         console.log(response.oneUsers);
//         dispatch({ type: "DELETEUSER", payload: response.oneUsers });
//       });
//   };
// };

// export const createLogin = (user) => {
//   return (dispatch) => {
//     dispatch({ type: "LOGIN/REGISTER", payload: user });
//   };
// };

// export const exit = () => {
//   return (dispatch) => {
//     dispatch({ type: "LOGIN/REGISTER" });
//   };
// };

// export const addUser = (users) => {
//   return (dispatch) => {
//     dispatch({ type: "INITUSERS", payload: users });
//   };
// };

// export const deleteUser = () => {
//   return (dispatch) => {
//     dispatch({ type: "DELETEUSER" });
//   };
// };
