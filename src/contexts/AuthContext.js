import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import Loading from "../pages/Loading";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setcurrentUser] = useState();
  const [pending, setPending] = useState(true);
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
      setPending(false);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if(pending){
    return (
      <Loading/>
    )
  }
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
