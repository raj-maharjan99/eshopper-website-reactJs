import NavCarousel from "../carasoule/NavCarousel";
import { CategoryData } from "../data/CategoriesData";
// import Gallery from "./Hero";
import HeroCollection from "./HeroCollection";
import Laptops from "./Laptops";
function Home() {
  return (
    <>
      <section>
        <div className="container mx-auto w-[1280px]">
          <div className=" flex border  ">
            <div>
              <div>
                <span className="bg-[#C17A74] font-[400] text-[20px]  flex justify-between px-5 py-3 w-[350px]">
                  <h3>Categories</h3>
                  <p>
                    <a href="">
                      <i className="bi bi-caret-down-fill"></i>
                    </a>
                  </p>
                </span>
                <span className="border font-[400] text-[20px]  flex justify-between px-5 py-3 w-[350px]">
                  <h3>Dresses</h3>
                  <p>
                    <a href="">
                      <i className="bi bi-caret-down-fill"></i>
                    </a>
                  </p>
                </span>
              </div>
              <div>
                <ul>
                  {CategoryData.map((item, index) => (
                    <li
                      key={index}
                      className=" border font-[400] text-[20px]  px-5 py-3 w-[350px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="px-2 ">
              <NavCarousel />
            </div>
          </div>
        </div>
        <div className="container py-2 px-[10px] mx-auto w-[1280px] bg-[#EDF1FF] flex justify-center  "></div>
        <div className="container py-2 px-[10px] mx-auto w-[1280px] bg-[#EDF1FF] flex justify-center  ">
          <Laptops product="laptops" />
        </div>
        <div className="container py-2 px-[10px] mx-auto w-[1280px] bg-[#EDF1FF] flex justify-center  ">
          <Laptops product="fragrances" />
        </div>
        <div className="container py-2 px-[10px] mx-auto w-[1280px] bg-[#EDF1FF] flex justify-center  ">
          <Laptops product="skincare" />
        </div>
        <Laptops product="groceries" />
        <Laptops product="home-decoration" />
        <Laptops product="smartphones" />
      </section>
    </>
  );
}

export default Home;
