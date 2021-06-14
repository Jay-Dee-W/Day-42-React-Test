


import React, { useCallback } from "react";
import { withRouter } from "react-router";
import {firebaseApp }from "../db/firebase";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebaseApp.auth().createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
          console.log(error)
          try{
          await firebaseApp.auth().signInWithEmailAndPassword(email.value, password.value);
          history.push("/");
          }catch{
            alert(error);
          }
      }
    },
    [history]
  );

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Access</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);