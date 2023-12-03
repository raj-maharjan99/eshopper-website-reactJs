import React from "react";

function EShopper() {
  return (
    <>
      <div className="px-[15px] w-[300px] py-[4px] flex flex-col gap-4">
        <div className="flex">
          <p className="text-[25px] font-[700]">
            <span className=" border   text-[25px] text-[#D19C97]">E</span>{" "}
            Shopper
          </p>
        </div>
        <p className="">
          Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no
          sit erat lorem et magna ipsum dolore amet erat.
        </p>
        <span className="flex gap-3">
          <p className="text-[#C5837C]">
            <i class="bi bi-geo-alt-fill"></i>
          </p>
          123 Street, New York, USA
        </span>
        <span className="flex gap-3">
          <p className="text-[#C5837C]">
            <i class="bi bi-envelope-fill"></i>
          </p>
          info@example.com
        </span>
        <span className="flex gap-3">
          <p className="text-[#C5837C]">
            <i class="bi bi-telephone-fill"></i>
          </p>
          +012 345 67890
        </span>
      </div>
    </>
  );
}

export default EShopper;
