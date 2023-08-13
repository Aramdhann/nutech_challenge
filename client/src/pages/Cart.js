import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Cart = () => {
  const productData = useSelector((state) => state.olshop.productData); // state.olshop.productData ini diambil dari reducers/index.js
  const userInfo = useSelector((state) => state.olshop.userInfo); // state.olshop.userInfo ini diambil dari reducers/index.js
  const [payNow, setPayNow] = useState(false); // ini untuk menampilkan tombol bayar
  const [totalAmt, setTotalAmt] = useState(""); // ini untuk menampilkan total harga
  useEffect(() => { // ini untuk menghitung total harga
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => { // ini untuk menampilkan tombol bayar
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to Checkout"); // ini untuk menampilkan pesan error jika belum login
    }
  };
  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", { // ini untuk proses pembayaran
      amount: totalAmt * 100, // ini untuk menghitung total harga yang akan dibayar (dalam satuan sen)
      token: token,
    });
  };

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
      {productData.length > 0 ? (
        <div className="max-w-screen-xl mx-20 py-20 flex">
          <CartItem />
          <div className="w-1/3 bg-[#fafafa] py-6 px-4">
            <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium ">cart totals</h2>
              <p className="flex items-center gap-4 text-base">
                Subtotal{" "}
                <span className="font-titleFont font-bold text-lg">
                  $ {totalAmt}
                </span>
              </p>
              <p className="flex items-start gap-4 text-base">
                Shipping{" "}
                <span>
                  Online shop provides free shipping for all orders above $ 100 ! So, add more products to your cart to get free shipping. Happy Shopping! :)
                </span>
              </p>
            </div>
            <p className="font-titleFont font-semibold flex justify-between mt-6">
              Total <span className="text-xl font-bold">$ {totalAmt}</span>
            </p>
            <button
              onClick={handleCheckout}
              className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
            >
              proceed to checkout
            </button>
            {payNow && (
              <div className="w-full mt-6 flex items-center justify-center">
                <StripeCheckout
                  stripeKey="pk_test_51NJuoqSGJ8ZxhPjZv3xpnQxnjMe2wq3UQQbWwRD9gjtluXvV16bxZEKLRL0WmNJ4ZOTvLzFlt0rUWBqixQ2njjws00nnigFZ3e"
                  name="Bazaar Online Shopping"
                  amount={totalAmt * 100}
                  label="Pay To Bazaar"
                  description={`Your payment amount is $${totalAmt}`}
                  token={payment}
                  email={userInfo.email}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="max-w-screen-xl mx-20 py-10 flex flex-col items-center gap-2 justify-center">
          <p className="text-xl text-orange-600 font-titleFont font-semibold">
            Your Cart is Empty. Please go back to Shopping and add products to
            Cart.
          </p>
          <Link to="/">
            <button className="flex items-center gap-1 text-gray-400 hover:text-black duration-300">
              <span>
                <HiOutlineArrowLeft />
              </span>
              go shopping
            </button>
          </Link>
        </div>
      )}
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;
