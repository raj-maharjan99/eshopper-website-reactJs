import SearchBar from "./SearchBar";

function Header() {
  return (
    <>
      <header>
        <div className="container py-2 px-[10px] mx-auto w-[1280px] bg-[#EDF1FF] ">
          <div className="flex justify-between">
            <ul className="flex gap-5">
              <li>FAQs |</li>
              <li>Help |</li>
              <li>Support</li>
            </ul>
            <ul className="flex gap-5">
              <li>
                <i className="bi bi-facebook"></i>
              </li>
              <li>
                <i className="bi bi-linkedin"></i>
              </li>
              <li>
                <i className="bi bi-instagram"></i>
              </li>
              <li>
                <i className="bi bi-instagram"></i>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <SearchBar />
    </>
  );
}

export default Header;
