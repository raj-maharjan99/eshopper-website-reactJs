import React from "react";

function NewsLetter() {
  let inputStyle = " border px-2 py-2";
  return (
    <>
      <div className="px-[15px] w-[300px] py-[4px] flex flex-col gap-4">
        <h2 className="text-[20px] font-[600]">Newsletter</h2>
        <input className={inputStyle} type="text" placeholder="Your Name" />
        <input className={inputStyle} type="text" placeholder="Your Email" />
        <input
          className={inputStyle}
          type="text"
          placeholder="Your Phone Number"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-red-500">
          Suscribe Now
        </button>
      </div>
    </>
  );
}

export default NewsLetter;
