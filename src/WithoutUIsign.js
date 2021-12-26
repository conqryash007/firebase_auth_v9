import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function WithoutUIsign() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const firebaseUserSign = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={firebaseUserSign}>Sign up</button>
      </header>
    </div>
  );
}
