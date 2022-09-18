import React from "react";
import { Link } from "library-caiol.sousa";

const NotFound = () => (
  <h1>
    Tela não encontrada <br />
    <Link href={{ defautlLink: "/" }} label="clique aqui" />
    para voltar a home
  </h1>
);

export default NotFound;
