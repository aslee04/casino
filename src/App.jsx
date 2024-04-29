import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./layout/Header";

function App() {
  return (
    <Fragment>
      <div className="flex bg-[#161926] text-white">
        <main className="min-h-screen flex flex-col w-full flex-grow-0">
          <Header />
          <main className="flex-shrink-0 flex-grow">
            <Outlet />
          </main>
          <footer className="flex-shrink-0">Footer</footer>
        </main>

        <div className="w-[320px] flex-shrink-0">chat</div>
      </div>
    </Fragment>
  );
}

export default App;
