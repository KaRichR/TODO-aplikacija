import React from "react";
import RegButton from "./components/RegButton";
import LogButton from "./components/LogButton";
import GetStarted from "./components/GetStarted";

function App() {
  const items = [
    { title: "Item 1 "},
    { title: "Item 2 "},
    { title: "Item 3 "},
  ]

  return (
    <main className="w-screen h-screen overflow-x-hidden">
      <div className="w-full h-screen bg-gradient-to-br from-sky-400 to-pink-400 relative">
        <img src="/img/bg-pluses.png" alt="" className="absolute w-full left-0 bottom-0"/>
        <img src="/img/main.png" alt="" className="absolute w-full left-0 bottom-0"/>

        <div className="w-full h-full absolute z-10">
          <nav className="flex px-64 items-center justify-between py-4">
          <img src="/img/Logo.png" alt="" className="w-16 h-16"/>
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




  <div className="w-screen overflow-x-hidden bg-slate-200">
        <div className="flex justify-between w-11/12 bg-slate-100 rounded-3xl h-36 mx-auto">
  {
      items.map(item => (
        <div key={item.title} className="flex items-center px-4 w-1/3">
          <img src="/img/Star_2.png" alt="" className="mr-4"/>
          <p className="text-4xl font-bold">{item.title}</p>
        </div>
      ))
    }
        </div>

        <div class="mx-auto w-11/12 bg-slate-200 mt-20 mb-20">
    <div class="flex flex-col">
        <div class="flex items-center justify-center h-1/3">
            <img src="/img/Star_1.png" alt="" class="mr-4"/>
            <div>
                <p class="text-4xl font-bold">Header</p>
                <p class="text-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at blandit nunc, sed semper nulla. Nulla diam est, dignissim tempor quam non, euismod pulvinar ipsum. Pellentesque metus.
                </p>
            </div>
        </div>
        <div class="flex items-center justify-center h-1/3 flex-row-reverse">
            <img src="/img/Star_1.png" alt="" class="ml-4"/>
            <div class="text-right">
                <p class="text-4xl font-bold">Header</p>
                <p class="text-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at blandit nunc, sed semper nulla. Nulla diam est, dignissim tempor quam non, euismod pulvinar ipsum. Pellentesque metus.
                </p>
            </div>
        </div>
        <div class="flex items-center justify-center h-1/3">
            <img src="/img/Star_1.png" alt="" class="mr-4"/>
            <div>
                <p class="text-4xl font-bold">Header</p>
                <p class="text-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at blandit nunc, sed semper nulla. Nulla diam est, dignissim tempor quam non, euismod pulvinar ipsum. Pellentesque metus.
                </p>
            </div>
        </div>
    </div>
</div>










</div>


    </main>
  );
}

export default App;
