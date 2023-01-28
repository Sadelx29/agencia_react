import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import { useViajes } from "../context/AgenciaProvider";
import ViajeCard from "../component/ViajeCard";

const Travels = () => {
  const { viaje, loadViajes } = useViajes();

  useEffect(() => {
    loadViajes();
    console.log(viaje);
  }, []);

  function renderMain() {
    console.log(viaje)

    return viaje.map((viaje) => <ViajeCard viaje={viaje} key={viaje.id} />);
  }

  return (
    <>
      <div>
        <Header />
        <div>
          <h1 className="text-5xl text-white font-bold text-center">Tasks</h1>
          <div className="grid  grid-cols-3 gap-2 pt-5">{renderMain()}</div>
        </div>
      </div>
    </>
  );
};

export default Travels;
