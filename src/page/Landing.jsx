import React from "react";
import {
  FeaturedProducts,
  Hero,
  ProductGrid,
  SectionTitle
} from "../components";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";

const url = "/products?featured=true";

const featurdProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url)
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featurdProductsQuery);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  const { products } = useLoaderData();

  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
