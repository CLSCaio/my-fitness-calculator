import { Inputs } from "library-caiol.sousa";

export const inputs: Inputs[] = [
  {
    name: "name",
    label: { name: "Nome" },
  },
  {
    name: "weight",
    label: { name: "Peso" },
    type: "number",
  },
  {
    name: "height",
    mask: "height",
    label: { name: "Altura" },
  },
  {
    name: "age",
    label: { name: "Idade" },
    type: "number",
  },
];

export const design = {
  maxW: 800,
};
