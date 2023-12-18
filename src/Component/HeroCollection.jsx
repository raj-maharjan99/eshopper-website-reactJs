import { DummyData } from "../data/dummyData";
function HeroCollection() {
  return (
    <>
      <div className="container py-2 px-5   mx-auto w-[1280px] bg-[#EDF1FF] ">
        <div className="  flex justify-between gap-[5px]  flex-wrap items-center">
          {DummyData.map((item) => (
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

export default HeroCollection;
