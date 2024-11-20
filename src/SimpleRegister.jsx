import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "./firebaseConfig";
import { useState } from "react";

export default function SimpleRegister() {
  const [success, setSuccess] = useState(false);
  const [errorNotification, setErrorNotification] = useState("");
  const [show, setShow] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const accept = e.target.terms.checked;
    const name = e.target.name.value;
    console.log(name, email, password, accept);

    setErrorNotification("");
    setSuccess("");

    if (password.length === 0) {
      setErrorNotification("Type pass");
      return;
    } else if (password.length < 6) {
      setErrorNotification("six charac need");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErrorNotification("need one upper case");
      return;
    } else if (!accept) {
      setErrorNotification("accept our terms please");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // console.log(result);
        sendEmailVerification(result.user)
          .then(() => {
            setErrorNotification("Check Email");
            setSuccess(true);
            updateProfile(result.user, {
              displayName: name,
              photoURL:
                "https://scitechdaily.com/images/Photon-Particle-Physics-Concept-777x518.jpg",
            })
              .then()
              .catch();
          })
          .catch((error) => {
            setErrorNotification(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setErrorNotification(error.message);
      });

    setTimeout(() => {
      setErrorNotification("");
      setSuccess("");
    }, 3000);
  };

  return (
    <div className="border border-red-950 ml-5 p-5">
      <h1 className="mb-2">Register please</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          className="w-1/4 px-4 py-2 mb-3 border"
          name="name"
        />
        <br />
        <input
          type="email"
          className="w-1/4 px-4 py-2 mb-3 border"
          name="email"
        />
        <br />
        <input
          type={show ? "text" : "password"}
          className="w-1/4 px-4 py-2 mb-3 border"
          name="password"
        />

        <span onClick={() => setShow(!show)} className="ml-2">
          {show ? "hide" : "show"}
        </span>

        <br />

        <div className="ml-1">
          <input className="mr-3" type="checkbox" name="terms" />
          <label htmlFor="terms">accept our terms</label>
        </div>

        <br />

        <input
          type="submit"
          value="submit"
          className="btn btn-secondary w-1/4 px-4 py-2 mb-3"
        />
      </form>
      {errorNotification ? (
        <p className="text-red-500">{errorNotification}</p>
      ) : (
        ""
      )}
      {success ? <p className="text-green-500">congratulation!!!!</p> : ""}
    </div>
  );
}
