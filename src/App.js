// src/Login.js
import React from "react";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup, getIdToken } from "firebase/auth";
import { auth } from "./firebase";
const provider = new GoogleAuthProvider();

export const App = () => {
  const handleSuccess = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      const idToken = await getIdToken(auth.currentUser);
      console.log("ID Token:", idToken);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFailure = (response) => {
    console.error("Login failed:", response);
  };

  return (
    <div>
      <h2>Login</h2>
      <button
        title="click"
        style={{ width: "100px", height: "50px", fontSize: "20px" }}
        onClick={() => handleSuccess(new GoogleAuthProvider())}
        onFailure={handleFailure}
      />
      <button
        title="click"
        style={{ width: "100px", height: "50px", fontSize: "20px" }}
        onClick={() => handleSuccess(new GoogleAuthProvider())}
        onFailure={handleFailure}
      />
    </div>
  );
};

export default App;
