import React, { useEffect } from "react";

import { useStoreUser } from "../../modules";

const Teste = () => {
  const { userStore } = useStoreUser();

  useEffect(() => {
    console.log(userStore);
  }, []);

  return userStore && userStore?.map(({ name }) => <h1 key={name}>{name}</h1>);
};
export default Teste;
