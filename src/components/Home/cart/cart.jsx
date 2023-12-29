
// export default cart
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { updateCartItemQuantity, removeFromCart } from "../../../Redux/cart/cartAction";
import { addToCart } from "../../../Redux/cart/cartAction";
import Header2 from '../Header2/Header2';


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleQuantityChange = (item, newQuantity) => {
    dispatch(updateCartItemQuantity(item, newQuantity));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
        <Header2/>

    <div className='main' style={{marginTop:"150px", alignItems:"center"}}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className='main'>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="course__info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>PRICE:{item.price}</p>
              </div>
              <div className="course__img">
                <img 
                height="20%"
                width="20%px"
                src={item.imgUrl} alt={item.title} />
              </div>
              {/* <label>
                Quantity:
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item, parseInt(e.target.value, 10))}
                />
              </label> */}
            </div>
          ))}
          <button  className='btn bg-primary text-white'>Checkout</button>
          {/* <p>Total: ${calculateTotalPrice().toFixed(2)}</p> */}
        </div>
      )}
    </div>
    </>

  );
};

export default Cart;
