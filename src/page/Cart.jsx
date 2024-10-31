import { useSelector } from "react-redux";
import { CartItemsList, SectionTitle, CartTotals } from "../components";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

const Cart = () => {
  //temp

  const user=useSelector((state)=>state.userState.user); 


  const numItemsCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="Shopping Cart" />

      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8 uppercase">
              proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8 uppercase">
             Please Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
