import { data } from "../database/data.js";

const Section = ({ get }) => {
  return (
    <section>
      <header>Questions</header>
      <div className="questions-numbers-container">
        {data.map((item) => {
          return (
            <span
              onClick={() => get(item.questionNumber)}
              className="box blue"
              key={item.questionNumber}
            >
              {item.questionNumber}
            </span>
          );
        })}
      </div>
      <div className="selection-type-container">
        <h6 className="selection-type">Selection Type</h6>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
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
