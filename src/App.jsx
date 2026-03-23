import "./App.css";

import AvailablePlyaers from "./components/AvailablePlyaers/AvailablePlyaers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Navbar from "./components/Navbar/Navbar";
import { Suspense } from "react";

const fetchPlayers = async ()=>{
  const res = fetch("/player.json")
  return (await res).json()
}


function App() {
  const playerPromise = fetchPlayers()
  return (
    <>
      <Navbar></Navbar>
      

      <Suspense fallback={<span className="loading loading-spinner loading-xl "></span>}>
        <AvailablePlyaers playerPromise={playerPromise}></AvailablePlyaers>
      </Suspense>

      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  );
}

export default App;
