import { multipleData } from "./data";
import Tracks from "./components/Tracks";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Tracks tracks={multipleData} />
      </div>
    </div>
  );
}
