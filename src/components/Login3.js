// Import the functions you need from the SDKs you ne
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { ProfileImage } from "./ProfileImage";
import { useUser } from "../providers/UserProvider";
import { MainMenu } from "./MainMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export function Login3() {
  const [errorMessage, setErrorMessage] = useState("");
  const { user, setUser } =
    useUser(); /* Obtenemos el usuario y la función que obtiene los usuarios */

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((userCredentials) => {
        console.log(`Bienvenido ${userCredentials.user.displayName}`);
        alert(`Bienvenido ${userCredentials.user.displayName}`);
        setUser({
          name: userCredentials.user.displayName,
          ProfileImage: userCredentials.user.photoURL,
        }); /* Obtenemos el usuario. Dentro de User tenemos la propiedad de photoURL que nos dará la url de la foto de perfil*/
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  useEffect(() => {
    console.log(
      `Bienvenido user ${user.name}`
    ); /* Usamos el user para obtener la info del usuario */
  }, [user]);

  useEffect(() => {
    auth.onAuthStateChanged(() => {
      /* onAuthStateChanged permite ver si el usuario esta autentificado */
      const user = auth.currentUser;

      if (user) {
        setUser({
          name: user.displayName,
          profileImage: user.photoURL,
        });
      }
    });
  }, []);

  return (
    <Router>
      <main className="App">
        <header className="App-header">
          <MainMenu />
          {user.name && <ProfileImage />}{" "}
          {/*Para mostrar la imagen del usuario. El user.name permitirá mostrar el componente imagen solo si el usuario está logueado.*/}
        </header>

        <Switch>
          <Route patch="/">
            <section className="container">
              <div className="card container sign-in-card">
                <button onClick={handleGoogleSignIn} className="sign-in-button">
                  Iniciar sesión con Google
                </button>
                {errorMessage && <div className="error">{errorMessage}</div>}
              </div>
            </section>
          </Route>

          <Route patch="/blog">
            <section>
              <div>Blog</div>
            </section>
          </Route>

          <ProtectedRoute to="/my-courses">
            <section className="container">
              <div>Cusos de: {user?.name}</div>
            </section>
          </ProtectedRoute>

          <Route>
            <div classNAme="container">Pagina no encontrada</div>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default Login3;
