import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setcurrentUser] = useState();
  const [loading, setLoading] = useState();

  //     Signing Up
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  //     Logging In
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  //     Logging Out
  function logout(){
    return auth.signOut()
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setcurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout
  };
  return (
    <AuthContext.Provider value={!loading && value}>
      {children}
    </AuthContext.Provider>
  );
}
