import * as Yup from "yup";

export const ProductSchema = Yup.object({
  id: Yup.string().default(""),
  title: Yup.string().required().default(""),
  description: Yup.string().default(""),
  price: Yup.number().positive().required().defined().default(0),
  image: Yup.string().default(""),
  count: Yup.number().default(0).required(),
  creationDate: Yup.number().default(0),
});

export const AvailableProductSchema = ProductSchema.shape({
  count: Yup.number().default(0).required(),
  id: Yup.string().required().default(""),
  title: Yup.string().required().default(""),
  description: Yup.string().default(""),
  image: Yup.string().default(""),
  price: Yup.number().positive().required().defined().default(0),
  creationDate: Yup.number().default(0).required(),
});

export type Product = Yup.InferType<typeof ProductSchema>;
export type AvailableProduct = Yup.InferType<typeof AvailableProductSchema>;
