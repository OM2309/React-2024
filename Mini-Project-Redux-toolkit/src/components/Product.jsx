import React from "react";

import { useDispatch } from "react-redux";
import { increaseAmount } from "../features/basketSlice";
import { decreaseAmount } from "../features/basketSlice";

const Product = ({ name, image, amount, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row items-center gap-8 px-10">
      <img className="w-20 h-20" src={image} alt={name + "glasses"} />
      <div className="w-1/2 px-10">
        <p className="text-xl font-medium">{name}</p>
        <p className="text-lg">{price}</p>
        <button className="text-red-500 tracking wide pt-1 pb-4">Remove</button>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg font-medium">Amount</p>
        <div className="flex flex-row  items-center gap-4 text-gray-600 font-medium">
          <button className="text-xl" onClick={()=>{dispatch(decreaseAmount({name}))}}>-</button>
          <p>{amount}</p>
          <button className="text-xl"  onClick={()=>{dispatch(increaseAmount({name}))}}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
