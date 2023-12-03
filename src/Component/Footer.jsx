import React from "react";
import EShopper from "./Footer-component/EShopper";
import QuickLink from "./Footer-component/QuickLink1";
import NewsLetter from "./Footer-component/NewsLetter";

function Footer() {
  return (
    <>
      <footer className="container bg-[#EDF1FF]  mx-auto w-[1280px]">
        <div className="flex py-[60px] flex-wrap justify-between  items-center">
          <EShopper />
          <QuickLink />
          <QuickLink />
          <NewsLetter />
        </div>
        <div className="py-[20px] px-1 flex justify-between border-[white] border-t-2">
          <p>
            <strong> © Your Site Name.</strong> All Rights Reserved. Designed by{" "}
            <strong>HTML Codex</strong>
          </p>
          <img src="./creditCard/visa.png" alt="" />
        </div>
      </footer>
    </>
  );
}

export default Footer;
