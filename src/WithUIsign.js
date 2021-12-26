import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function WithUIsign() {
  const firebaseUserSign = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(credential, user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={firebaseUserSign}>Sign up popup</button>
      </header>
    </div>
  );
}
