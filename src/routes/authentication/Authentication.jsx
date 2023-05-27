import React from "react";
// import {
//   // auth,
//   createUserDocumentFromAuth,
//   signInWithGooglePopup,
// } from "../../utils/firebase/firebase";
import SignUp from "../../components/sign-up/SignUp";
import SignIn from "../../components/sign-in/SignIn";
import './authentication.styles.scss'
// import { getRedirectResult } from "firebase/auth";

export default function Authentication() {
  // useEffect(() => {
  //   (async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   })();
  // }, []);

  return (
    <div className="authentication-container">
      <SignIn />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
      </button> */}
      <SignUp />
    </div>
  );
}
