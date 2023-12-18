import React from "react";
import { DummyData } from "../data/dummyData";
function Laptops(props) {
  let laptopData = DummyData.filter(
    (filterData) => filterData.category == props.product
  );
  return (
    <>
      <div className="container py-2 px-5 text-center   mx-auto w-[1280px] bg-[#EDF1FF] ">
        <h2 className="py-5 text-[30px]">{props.product}</h2>
        <div className="  flex justify-between gap-[5px]  flex-wrap items-center">
          {laptopData.map((item) => (
            <div className=" w-[300px] border p-3">
              <img src={item.thumbnail} className="w-full h-[200px]" alt="" />
              <p>Price: ${item.price} </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Laptops;
