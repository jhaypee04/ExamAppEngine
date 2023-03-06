import Main from "./components/Main";
import Nav from "./components/Nav";
import Section from "./components/Section";
import "./styles.css";

import { data } from "./database/data.js";

export default function App() {
  return (
    <div className="container">
      <Nav />
      <Section />
      <Main />
    </div>
  );
}
