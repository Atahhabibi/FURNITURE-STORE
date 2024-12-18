import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const {
    meta: { companies, categories },
    params
  } = useLoaderData();

  const { search, company, category, shipping, order, price } = params;


  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* SEARCH */}

      <FormInput
        type="search"
        label="Search products"
        name="search"
        size="input-sm"
        defaultValue={search}
      />

      {/* CATEGORIES*/}
      <FormSelect
        label="select categories"
        name="category"
        list={categories}
        size="select-sm"
        defaultValue={category}
      />

      {/* COMPANIES*/}
      <FormSelect
        label="select company"
        name="company"
        list={companies}
        size="select-sm"
        defaultValue={company}
      />

      {/* ORDERS*/}
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />

      {/* PRICE */}
      <FormRange name="price" label="select price" size="range-sm" price={price} />

      {/*SHIPPING */}

      <FormCheckbox name="shipping" label="free shipping" size="checkbox-sm"  defaultValue={shipping}/>

      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm mt-8 ">
        search
      </button>

      <Link to="/products" className="btn btn-accent btn-sm mt-8 ">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
