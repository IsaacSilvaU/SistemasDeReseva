/* Un Provider es un componente para agrupar componentes hijos para pasar información. En este caso la del usuario */

import React, { useState } from "react";

const userContextDefaultValue = {
  user: { name: "", profileImage: "" },
  setUser: () => {},
};

const UserContext = React.createContext(userContextDefaultValue);

export const UserProvider = ({ children }) => {
  /* Children, recibir hijos como propiedad */
  const [user, setUser] = useState({}); /* Hooks */

  const value = {
    user,
    setUser /* función para cambiar el usuario */,
  };
  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  ); /* Value es el valor que los hijos pueden leer */
};

/* constom hooks */
export const useUser = () => {
  /* hooks o función a reutilizar */
  const context =
    React.useContext(
      UserContext
    ); /* usamos el contexto usando el componente useContext */

  if (!context) {
    throw new Error(
      "useUser must be used within a userProvider"
    ); /* Aviso de que si no fue usado el contexto quiere decir que el hook fue llamado por fuera por un proveedor. Por tanto si el contexto no existe generamos un error informando que el hook siempre debe usarse dentro de un userProvider*/
  }

  return context; /* retornamos el userContext, es decir los usuarios o componentes que usen este hook podrán acceder al context donde este posee el usuario (user) y la función que asigna los usuarios (setUser) */
};
