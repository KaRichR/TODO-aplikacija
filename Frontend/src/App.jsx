import React from "react";
import RegButton from "./components/RegButton";
import LogButton from "./components/LogButton";
import GetStarted from "./components/GetStarted";

function App() {
  return (
    <main className="w-screen h-screen overflow-x-hidden">
      <div className="w-full h-screen bg-gradient-to-br from-sky-400 to-pink-400 relative">
        <img src="/img/main.png" alt="" className="absolute w-full left-0 bottom-0"/>
        <img src="/img/bg-pluses.png" alt="" className="absolute w-full left-0 bottom-0"/>
        <div className="w-full h-full absolute z-10">
          <nav className="flex px-64 items-center justify-between py-4">
            <h1>Logo</h1>
            <div className="flex gap-8">
              <RegButton/>
              <LogButton/>
            </div>
          </nav>
          <div className="absolute top-0 left-0 flex-col flex justify-center items-center h-full w-full gap-6">
            <p className="text-9xl text-white font-bold">QWAK TODO</p>
            <p className="text-7xl">For all tasks - always</p>
            <GetStarted/>
          </div>
        </div>
      </div>

      <div className="w-screen h-screen overflow-x-hidden bg-slate-200">
  <div className="container flex justify-around items-center w-11/12 bg-white h-36 mx-auto">
    <div className="flex items-center">
      <img src="/img/Star_2.png" alt="" className="mr-4"/>
      <p class="text-lg font-bold">Item 1</p>
    </div>
    <div className="flex items-center">
      <img src="/img/Star_2.png" alt="" className="mr-4"/>
      <p class="text-lg font-bold">Item 2</p>
    </div>
    <div className="flex items-center">
      <img src="/img/Star_2.png" alt="" className="mr-4"/>
      <p class="text-lg font-bold">Item 3</p>
    </div>
  </div>
</div>





    </main>
  );
}

export default App;
