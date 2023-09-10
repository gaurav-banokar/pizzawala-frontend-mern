import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// scss importation
import "./cart.scss";
import Heading from "../layout/heading/Heading";

const CartItem = ({
  value,
  title,
  id,
  img,
  calculatePrice,
  increment,
  decrement,
}) => {
  const [quantity, setQuantity] = useState(value);

  return (
    <div className="cartItem">
      <div>
        <h4>{title}</h4>
        <img src={img} alt="Item" />
      </div>

      <div>
        <button
          className="btn"
          onClick={(e) => {
            setQuantity(quantity - 1);
            decrement(id, value);
            calculatePrice();
          }}
        >
          -
        </button>
        <input type="number" readOnly value={value} />
        <button
          className="btn"
          onClick={(e) => {
            setQuantity(quantity + 1);
            increment(id);
            calculatePrice();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems, subTotal, tax, shippingCharges, total } = useSelector(
    (state) => state.cart
  );

  const calculatePrice = () => {
    dispatch({
      type: "calculatePrice",
    });
  };
  const increment = (id) => {
    dispatch({
      type: "increment",
      payload: id,
    });
  };
  const decrement = async (id, quantity) => {
    if ( quantity <= 1) {
      await dispatch({
        type: "removeCartItem",
        payload: id,
      });
      dispatch({
        type:"calculatePrice"
      })
      
    } else {
      dispatch({
        type: "decrement",
        payload: id,
      });
    }
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/emptycart");
    }
  }, [cartItems,navigate]);

  

  return (
    <section className="cart">
        <div><Heading heading={"Wishlist"} /></div>
      <div className="cartDiv">
        <main>
          {cartItems &&
            cartItems.map((i) => {
              return i.quantity >= 1 ? (
                <CartItem
                  value={i.quantity}
                  title={i.name}
                  key={i.id}
                  id={i.id}
                  img={i.image}
                  increment={increment}
                  decrement={decrement}
                  calculatePrice={calculatePrice}
                />
              ) : (
                navigate("/emptycart")
              );
            })}
          <article>
            <div>
              <h4>Sub Total</h4>
              <p>₹ {subTotal}</p>
            </div>
            <div>
              <h4>Tax</h4>
              <p>₹ {tax}</p>
            </div>
            <div>
              <h4>Shipping Charges</h4>
              <p>₹ {shippingCharges}</p>
            </div>
            <div>
              <h4>Total</h4>
              <p>₹ {total}</p>
            </div>
            <Link to="/shipping">Checkout</Link>
          </article>
        </main>
      </div>
    </section>
  );
};

export default Cart;
