// import { Icon } from "@mui/material";
// import React, { useState, useCallback } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import styles from "../../styles/layout/cardEdit.module.scss";
// import ModalUser from "../ModalUser";

// const CardModalUser = ({ profileDisplay }) => {
//   const user = useSelector((store) => store.user);
//   const dispatch = useDispatch();
//   const [click, setClick] = useState(false);

//   const deleteProfile = useCallback(
//     (name) => {
//       console.log("!9!", user);
//       fetch("/deleteProfile", {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email: user.email, name }),
//         method: "DELETE",
//       })
//         .then((users) => users.json())
//         .then((response) => {
//           console.log(response);
//           dispatch({ type: "LOGIN/REGISTER", payload: response.updatedUser });
//         });
//     },
//     [user]
//   );

//   return (

//     <div className={row ${styles.wrapper_card}}>
//       <div className={col ${styles.card}}>

//     <div className={`row ${styles.wrapper_card}`}>
//       <div className={`col ${styles.card}`}>

//         <div className="col centered">
//           <p>{profileDisplay.name}</p>
//           <p>{profileDisplay.email}</p>
//           <p>{profileDisplay.activity}</p>
//         </div>

//         <div className={row ${styles.card_button}}>
//           <button
//             className={row centered ${styles.button_left}}

//         <div className={`row ${styles.card_button}`}>
//           <button
//             className={`row centered ${styles.button_left}`}
//             onClick={() => {
//               setClick(!click);
//             }}
//           >
//             Edit
//             <Icon style={{ margin: "5px" }} fontSize="small">
//               edit
//             </Icon>
//           </button>
//           <button

//             className={row centered ${styles.button_right}}

//             className={`row centered ${styles.button_right}`}

//             onClick={() => deleteProfile(profileDisplay.name)}
//           >
//             Delete
//             <Icon style={{ margin: "5px" }} fontSize="small">
//               delete
//             </Icon>
//           </button>
//         </div>
//       </div>
//       {click && (
//         <ModalUser open={click} setOpen={setClick} profile={profileDisplay} />
//       )}
//     </div>
//   );
// };

// export default CardModalUser;
