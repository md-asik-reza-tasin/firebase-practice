import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

export default function Login() {
  const [logUser, setLogUser] = useState(null);

  //use getAuth for manage user login, logout, sign up
  //app specify the project where firebase need to manage the users
  const auth = getAuth(app);
  console.log(app);

  //creating provider for google sign in
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setLogUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGithub = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        setLogUser(result.user);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        console.log(result.user);
        setLogUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth, provider)
      .then((result) => {
        console.log(result);
        setLogUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3>{logUser?.displayName}</h3>
      <h3>{logUser?.email}</h3>
      <img src={logUser?.photoURL} alt={logUser?.displayName} />

      {logUser ? (
        <button onClick={handleSignOut}>sign out</button>
      ) : (
        <>
          <button onClick={handleGoogle}>google sign in</button>
          <button onClick={handleGithub}>github sign in</button>
          <button onClick={handleFacebook}>facebook sign in</button>
        </>
      )}
    </div>
  );
}
