function SearchBar() {
  return (
    <>
      <section>
        <div className="mx-auto w-[1280px] py-3 border-b-2 ">
          <div className="flex justify-between">
            <div className="flex">
              <p className="text-[25px] font-[700]">
                <span className=" border  px-[15px] py-[4px] text-[25px] text-[#D19C97]">
                  E
                </span>{" "}
                Shopper
              </p>
            </div>
            <div className="flex">
              <input
                className="border px-2 w-[500px]"
                type="text"
                placeholder="Search for products..."
              />
              <p className="border text-[#D19C97] py-2 px-2">
                <i class="bi bi-search"></i>
              </p>
            </div>
            <div className="flex gap-1">
              <p className="border text-[#D19C97] py-2 px-6">
                <i class="bi bi-heart-fill"></i>
              </p>
              <p className="border text-[#D19C97] py-2 px-6">
                <i class="bi bi-cart-fill"></i>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchBar;
