import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  RecaptchaVerifier,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "@config/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const createUser = (phoneNumber) => {
    setLoading(true);
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth,
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const OTPUser = (phoneNumber) => {
    setLoading(true);
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth,
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    providerLogin,
    forgotPassword,
    logOut,
    createUser,
    signIn,
    loading,
    setLoading,
    OTPUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
