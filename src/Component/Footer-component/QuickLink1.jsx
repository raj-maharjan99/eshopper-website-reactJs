import { QuickLink } from "../../data/NavList";

function QuickLink1() {
  return (
    <>
      {" "}
      <div className="px-[15px] w-[300px] py-[4px] flex flex-col gap-4">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-[20px] font-[600]">Quick Links</h2>
          {QuickLink.map((item, index) => (
            <ul key={index}>
              <li className="flex gap-3">
                <i class="bi bi-caret-right-fill"></i>
                {item}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default QuickLink1;
