import { useRef } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  const refs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <>
        <Provider store={store}>
          <div className="mainContainer bg-slate-50">
            <Navbar scrollTo={scrollTo} refs={refs} />
            <Content scrollTo={scrollTo} refs={refs} />
          </div>
        </Provider>
    </>
  );
}

export default App;
