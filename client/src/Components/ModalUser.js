// import React, { useState, useCallback } from "react";
// import {
//   TextField,
//   Icon,
//   Radio,
//   FormControlLabel,
//   Modal,
//   FormLabel,
// } from "@mui/material";
// import styles from "../styles/modalUser.module.scss";
// import { useDispatch, useSelector } from "react-redux";

// const ModalUser = (open, setOpen, profile) => {
//   const user = useSelector((store) => store.user);
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState();
//   const [check, setCheck] = useState();

//   const editProfile = useCallback(() => {
//     fetch("/editProfile", {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: user.email,
//         profile: formData,
//         oldName: profile.name,
//       }),
//       method: "PATCH",
//     })
//       .then((user) => user.json())
//       .then((response) => {
//         dispatch({ type: "LOGIN/REGISTER", payload: response.updatedUser });
//       });
//   }, [user, formData, profile]);

//   return (
//     <Modal open={open} onClose={() => setOpen(!open)}>
<<<<<<< Updated upstream
//       <div className={col centered ${styles.wrapper_modal}}>
//         <div className={col centered ${styles.modal}}>
=======
//       <div className={`col centered ${styles.wrapper_modal}`}>
//         <div className={`col centered ${styles.modal}`}>
>>>>>>> Stashed changes
//           <TextField
//             type="text"
//             label="name"
//             value={formData?.name}
//             variant="standard"
//             placeholder="name:"
//             className={styles.input}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           />
//           <TextField
//             type="text"
//             value={formData?.city}
//             label="email"
//             variant="standard"
//             placeholder="email:"
//             className={styles.input}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//           />
<<<<<<< Updated upstream
//           <div className={col ${styles.input}}>
=======
//           <div className={`col ${styles.input}`}>
>>>>>>> Stashed changes
//             <FormLabel component="legend">user:</FormLabel>
//             <div className="row sp_btw">
//               <FormControlLabel
//                 value="user"
//                 control={
//                   <Radio
//                     onChange={(e) => {
//                       setFormData({ ...formData, activity: e.target.value });
//                       setCheck("user");
//                     }}
//                     checked={check === "user"}
//                   />
//                 }
//                 label="user"
//               />
//               <FormControlLabel
//                 value="admin"
//                 control={
//                   <Radio
//                     onChange={(e) => {
//                       setFormData({ ...formData, activity: e.target.value });
//                       setCheck("admin");
//                     }}
//                     checked={check === "admin"}
//                   />
//                 }
//                 label="admin"
//               />
//             </div>
//           </div>

//           <div className={row sp_btw ${styles.input}}>

//           <div className={`row sp_btw ${styles.input}`}>
//             <button
//               className={styles.button}
//               onClick={() => {
//                 editProfile();
//                 setOpen(false);
//               }}
//             >
//               <Icon>check</Icon>
//             </button>
//             <button className={styles.button} onClick={() => setOpen(false)}>
//               <Icon>close</Icon>
//             </button>
//           </div>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default ModalUser;
