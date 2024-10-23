import { Route, Routes } from "react-router-dom";

import { RevistaListar } from "../../componentes/revistas/RevistaListar";
import { RevistaAdmin } from "../../componentes/revistas/RevistaAdmin";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { RevistaActualizar } from "../../componentes/revistas/RevistaActualizar";
import { Quienes } from "../../componentes/otros/Quienes";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
import { RevistaCrear } from "../../componentes/revistas/RevistaCrear";


export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/revcre" element={<RevistaCrear />} />
      <Route path="/revadm" element={<RevistaAdmin />} />
      <Route path="/revlist" element={<RevistaListar />} />

      <Route path="/revact:codigo" element={<RevistaActualizar />} />

      <Route path="/qns" element={<Quienes />} />
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
