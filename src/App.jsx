import SideBar from "./components/SideBar";
import "./App.css";
import Main from "./components/Main";
import Other from "./components/Other";
export default function App() {
  return (
    <div className="App">
      <SideBar />
      <Main />
      <Other />
    </div>
  );
}
