import "./App.css";

import AvailablePlyaers from "./components/AvailablePlyaers/AvailablePlyaers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Navbar from "./components/Navbar/Navbar";
import { Suspense, useState } from "react";

const fetchPlayers = async ()=>{
  const res = fetch("/player.json")
  return (await res).json()
}


function App() {

const [switchTab, setSwitchTab] = useState(true)



  const playerPromise = fetchPlayers()
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-300 mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">Available Players</h1>

        <div className="">
          <button onClick={()=>setSwitchTab(true)} className={`py-3 px-4 btn border border-gray-400 rounded-l-2xl border-r-0 ${switchTab === true ? 'bg-[#E7FE29] text-gray-700' : '' } `}>Available</button>

          <button onClick={()=>setSwitchTab(false)} className={`py-3 px-4 btn border border-gray-400 rounded-r-2xl border-l-0 ${switchTab === false ? 'bg-[#E7FE29] text-gray-700' : '' }`}>Selected <span>(0)</span></button>
        </div>
      </div>



      {
        switchTab === true ? <Suspense fallback={<span className="loading loading-spinner loading-xl "></span>}>
        <AvailablePlyaers playerPromise={playerPromise}></AvailablePlyaers>
      </Suspense> :

      <SelectedPlayers></SelectedPlayers>
      }

      

    </>
  );
}

export default App;
