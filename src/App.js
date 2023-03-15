import Body from "./components/Body";
import Nav from "./components/Nav";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <Nav duration={60} />
      <Body />
    </div>
  );
}
