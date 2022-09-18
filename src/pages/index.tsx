import React from "react";
import { Container } from "library-caiol.sousa";

import { useStoreUser } from "../modules";

import { Home } from "../layouts";

const Base: React.FC = () => {
  const { resetUser } = useStoreUser();

  return (
    <Container gap={[30, 30]} direction="column">
      <h1>Seja bem vindo ao MyFitnessCalculatorCLS!</h1>
      <h2>PROJETO EM DESENVOLVIMENTO</h2>

      <Home />
    </Container>
  );
};

export default Base;
