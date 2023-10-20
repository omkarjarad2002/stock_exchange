import { createContext, useState } from "react";

export const conApp = createContext();

export default function Provider({ children }) {
  const [userAdd, setUserAdd] = useState("");
  const [constractDetails, setConstractDetails] = useState();

  return (
    <conApp.Provider
      value={{ userAdd, setUserAdd, constractDetails, setConstractDetails }}
    >
      {children}
    </conApp.Provider>
  );
}
