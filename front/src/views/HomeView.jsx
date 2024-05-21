import RegButton from "../components/Home/RegButton";
import LogButton from "../components/Home/LogButton";
import GetStarted from "../components/Home/GetStarted";

export default function HomeView() {
    const storedTheme = localStorage.getItem('theme');
    const items = [
        { title: "Item 1 "},
        { title: "Item 2 "},
        { title: "Item 3 "},
      ]
    
      return (
        <main className="w-screen h-screen overflow-x-hidden select-none">
          <div className="w-full h-screen bg-gradient-to-br from-sky-400 to-pink-400 relative">
            <img src="/plus.png" alt="" className="absolute w-full left-0 bottom-0"/>
            {
                storedTheme === 'dark'
                    ?
                <img src="/waveDark.png" className="w-full absolute bottom-0 left-0"/>
                    :
                <img src="/waveLight.png" className="w-full absolute bottom-0 left-0"/>
                    
            }
    
            <div className="w-full h-full absolute z-20">
              <nav className="w-full h-16 absolute top-0 left-0 flex items-center justify-between px-48">
                <div className="w-12 h-12">
                    <img src="/Logo.png" />
                </div>

                <div className="flex items-center gap-4 z-30">
                    <RegButton />
                    <LogButton />
                </div>
              </nav>
              <div className="absolute top-0 left-0 flex-col flex justify-center items-center h-full w-full gap-6">
                <p className="text-9xl text-white font-bold">QWAK TODO</p>
                <p className="text-7xl">For all tasks - always</p>
                <GetStarted/>
              </div>
            </div>
          </div>
        </main>
      );
    }