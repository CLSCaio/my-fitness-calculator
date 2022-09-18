import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Form } from "library-caiol.sousa";

import { useStoreUser } from "../../modules";

import { design, inputs } from "./form";

export const Home = () => {
  const { saveUser, userStore } = useStoreUser();
  const onSubmit = (): void => {
    saveUser({
      name: form.values.name,
      height: form.values.height,
      age: form.values.age,
      weight: form.values.weight,
    });
  };

  useEffect(() => {
    console.log(userStore);
  }, [userStore]);

  const form = useFormik({
    initialValues: {
      name: "",
      weight: "",
      height: "",
      age: "",
    },
    onSubmit,
  });

  return (
    <Form
      form={form}
      inputs={inputs}
      design={design}
      button={{ label: "Enviar" }}
    />
  );
};
