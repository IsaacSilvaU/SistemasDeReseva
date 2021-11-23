import { getAuth } from "@firebase/auth";
import { Link } from "react-router-dom";
import { useUser } from "../providers/UserProvider";
import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "../firebaseConfig";

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export const MainMenu = () => {
  const { setUser, user } = useUser();

  const handleSingOut = () => {
    setUser({});

    auth.signOut().then(() =>{
        window.location.reload();
    })
    .catch((error) => console.log(error));
  };

  return (
    <nav className="main-menu">
      <ul>
        <li>
          <Link to="/formulario">Formulario</Link>
        </li>
        {user.name &&( /* Solo mostrará el Cerrar Sesion y mis cursos si la persona está logueada */
        <>
        <li>
          <Link to="/my_courses">Mis Cursos</Link>
        </li>
        <li>
          <a href="inicio" onClick={handleSingOut}>
            Cerrar sesión
          </a>
        </li>
        </>)}
      </ul>
    </nav>
  );
};
