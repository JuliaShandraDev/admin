export const register = (user, formData) => {
  return async (dispatch) => {
    const create = await fetch("/registration", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      method: "POST",
    });
    const json = await create.json();
    dispatch({ type: "LOGIN/REGISTER", payload: json.createdUser });
  };
};

export const registLogin = (formData) => {
  return async (dispatch) => {
    const login = await fetch("/login", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      method: "POST",
    });
    const json = await login.json();
    dispatch({ type: "LOGIN/REGISTER", payload: json.createdUser });
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    const usersAll = await fetch("/users", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const json = await usersAll.json();
    dispatch({ type: "INIT_USERS", payload: json.allUsers });
  };
};

export const deleteProfile = (user, name) => {
  return async (dispatch) => {
    const profile = await fetch("/deleteProfile", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email, name }),
      method: "DELETE",
    });
    const json = await profile.json();
    dispatch({ type: "LOGIN/REGISTER", payload: json.updatedUser });
  };
};

export const editProfile = (user, formData, profile) => {
  return async (dispatch) => {
    const edit = await fetch("/editProfile", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        profile: formData,
        oldName: profile.name,
      }),
      method: "PATCH",
    });

    const json = await edit.json();
    console.log(json);
    dispatch({ type: "LOGIN/REGISTER", payload: json.updatedUser });
  };
};

export const createProfile = (user, formData) => {
  return async (dispatch) => {
    const create = await fetch("/editUser", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user, profile: formData }),
      method: "PATCH",
    });
    const json = await create.json();
    dispatch({ type: "LOGIN/REGISTER", payload: json.updatedUser });
  };
};
