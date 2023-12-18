import { NavList } from "../data/NavList";
import { Slider } from "./Carousel";

function NavCarousel() {
  return (
    <>
      <section>
        <div className="container mx-auto w-[100%]">
          <div className="">
            <div className=" text-[20px]  flex  justify-between gap-[350px]   font-[400]">
              <ul className="flex gap-5  ">
                {/* using map method to receive data from data.js */}
                {/* {NavList.map((item, index) => (
                  <a href="">
                    {" "}
                    <li className="hover:text-red-600" key={index}>
                      {item}
                    </li>
                  </a>
                ))} */}
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Shop</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Home</a>
                </li>
              </ul>
              <ul className="flex gap-3">
                <li>Login</li>
                <li>Register</li>
              </ul>
            </div>
            <div className="py-5">
              <Slider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NavCarousel;
