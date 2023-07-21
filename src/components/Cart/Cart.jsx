import { DeleteOutline } from '@mui/icons-material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import './Cart.scss';
import {loadStripe} from '@stripe/stripe-js';
import {makeRequest} from '../../makeRequest';

const Cart = () => {

    const products = useSelector((state)=> state.cart.products)
    const dispatch = useDispatch();
    const totalPrice = () => {
        let total =0 ; 
        products.forEach((item)=> (total +=  item.quantity * item.price));

        return total.toFixed(2) ;
    }
    const stripePromise = loadStripe('pk_test_51NVhB7SBVIOw32Nb5jAnh5t7augCB5YNuo2evrtporetKQ6Rtri9ym8cA1paaADcL9lxKZR9gjso44XiKsBjARnw00gmPtxrUb');
    const handlePayment = async () => {
        try {
          const stripe = await stripePromise;
          const res = await makeRequest.post("/orders", {
            products,
          });
          await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id,
          });
    
        } catch (err) {
          console.log(err);
        }
      };
    
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {products?.map(item=> (
            <div className='item' key={item.id}>
                <img src={"http://localhost:1337" + item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price"> {item.quantity} x ${item.price}</div>
                </div>
                <DeleteOutline className='delete' onClick={()=> dispatch(removeItem(item.id))}/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
        </div>
        <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        <span className="reset" onClick={()=> dispatch(resetCart())}>Reset Cart</span>

    </div>
  )
}

export default Cart