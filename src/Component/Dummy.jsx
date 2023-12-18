import { DummyData } from "../data/dummyData";

function Dummy() {
  return (
    <div>
      {DummyData.map((a) => (
        <div>
          <h1>{a.category}</h1>
          <p>{a.price}</p>
          <img src={a.photo} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Dummy;
