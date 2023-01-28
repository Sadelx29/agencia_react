import { useContext, useState } from "react";

import { getViajesRequest } from "../api/Api";
import { AgenciaContext } from "./AgenciaContext";

export const useViajes = () => {
  const context = useContext(AgenciaContext);
  if (!context) {
    throw new Error("useAgency must be used whitin a AgencyProvider");
  }
  return context;
};

export const AgenciaContextProvider = ({ children }) => {
  const [viaje, SetViajes] = useState([]);

  async function loadViajes() {
    const Gviajes = await getViajesRequest();
    console.log(Gviajes.data);
    SetViajes(Gviajes.data);
  }

  return (
    <AgenciaContext.Provider
      value={{
        viaje,
        loadViajes,
      }}
    >
      {children}
    </AgenciaContext.Provider>
  );
};
