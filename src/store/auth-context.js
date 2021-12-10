import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false, //default object to be consumed by the consumers
  onLogout: () => {},
  onLogin: (email, password) => {}
});

export default AuthContext;