import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import auth from "./firebaseConfig";

export default function Login() {
  const [forget, setForget] = useState(false);
  const [verify, setVerify] = useState("");
  const [verify1, setVerify1] = useState(false);
  // const [logUser, setLogUser] = useState(null);

  // //use getAuth for manage user login, logout, sign up
  // //app specify the project where firebase need to manage the users
  // const auth = getAuth(app);
  // console.log(app);

  // //creating provider for google sign in
  // const provider = new GoogleAuthProvider();
  // const gitProvider = new GithubAuthProvider();
  // const facebookProvider = new FacebookAuthProvider();

  // const handleGoogle = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const user = result.user;
  //       setLogUser(user);
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  // const handleGithub = () => {
  //   signInWithPopup(auth, gitProvider)
  //     .then((result) => {
  //       setLogUser(result.user);
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const handleFacebook = () => {
  //   signInWithPopup(auth, facebookProvider)
  //     .then((result) => {
  //       console.log(result.user);
  //       setLogUser(result.user);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  // const handleSignOut = () => {
  //   signOut(auth, provider)
  //     .then((result) => {
  //       console.log(result);
  //       setLogUser(null);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  console.log(auth);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if (result.user.emailVerified) {
          console.log(result.user);
        } else {
          alert("verify email please");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleForget = () => {
    setForget(!forget);
    // console.log(forget)
  };

  const handleSendPassToEmail = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setVerify("Check your email");
        setVerify1(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-none">
            {forget ? (
              <div>
                {verify1 ? (
                  <>
                    <p className="text-green-500">Check your email</p>
                    <span
                      onClick={() => {
                        setForget(!forget);
                        setVerify1(false);
                      }}
                    >
                      Log in
                    </span>
                  </>
                ) : (
                  <form onSubmit={handleSendPassToEmail} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="email"
                        className="input input-bordered"
                        name="email"
                      />
                    </div>
                    <span onClick={() => setForget(!forget)}>Log in</span>
                    <div className="form-control mt-6">
                      <input
                        type="submit"
                        value="SEND"
                        className="btn btn-primary"
                      />
                    </div>
                  </form>
                )}
              </div>
            ) : (
              <form onSubmit={handleLogIn} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                  />
                </div>
                <span onClick={handleForget}>Forget password</span>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="submit"
                    className="btn btn-primary"
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* <h3>{logUser?.displayName}</h3>
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
      )} */}
    </div>
  );
}
