import { data } from "../database/data.js";

const Section = () => {
  console.log(data);
  return (
    <section>
      <header>Questions</header>
      <div className="questions-numbers-container">
        {data.map((item) => {
          return <span className="box blue">{item.questionNumber}</span>;
        })}
      </div>
      <div className="selection-type-container">
        <h6 className="selection-type">Selection Type</h6>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="box blue"></span>
            <span className="little-text">Attempted</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="box no-color"></span>
            <span className="little-text">Not Attempted</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section;
