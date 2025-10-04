import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const generateBill = () => {
    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }
    // You can also save bill details to database here
    alert(`✅ Bill Generated!\nTotal: ₹${totalPrice}`);
    
    // Clear cart
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  return (
    <>
      <h2 className="cartheader">Your Cart</h2>
      <div className="cart">
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
      </div>
      <h3>Total: ₹{totalPrice}</h3>
      <button className="gen" onClick={generateBill}>Generate Bill</button>


    </>
  );
};

export default Cart;
