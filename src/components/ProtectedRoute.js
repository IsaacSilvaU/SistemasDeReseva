import { Route } from "react-router";
import { Redirect } from "react"
import { useUser } from "../providers/UserProvider";

export const ProtectedRoute = ({ children, ...rest }) => {
  const { user } = useUser();
  return (
    <Route
      {...rest} //Hace una verificación adicional y pasa el resto de propiedades (donde va la ruta, si el match es correcto...)
      render={({ location }) => {
        //Location permite informar de que ruta viene
        return user.name ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/", state: location }}
          /> /* El usuario intenta entrar a una pagina pero no está logueado y si se loguea el location permitirá retornar a la página que quería acceder */
        );
      }}
    />
  );
};
