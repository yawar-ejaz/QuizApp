import React, { useEffect, useReducer } from "react";

const AuthContext = React.createContext({
  user: {
    name: null,
    username: null,
    email: null,
    token: null,
  },
  dispatch: () => {},
});

const ACTIONS = {
  LOGIN: "login-the-user",
  LOGOUT: "logout-the-user",
};

const authReducer = (state, action) => {
    if (action.type === ACTIONS.LOGIN) {
        return { user: action.payload };
    }
    else if (action.type === ACTIONS.LOGOUT) {
        localStorage.removeItem("user");
        return { user: null };
    }
    else {
        return state;
    }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    dispatch: () => {},
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({
        type: ACTIONS.LOGIN,
        payload: user,
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, ACTIONS, authReducer, AuthContextProvider };