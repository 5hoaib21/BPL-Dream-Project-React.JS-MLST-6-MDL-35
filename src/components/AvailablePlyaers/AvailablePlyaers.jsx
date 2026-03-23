import React, { use } from "react";

import SinglePlayer from "../SinglePlayer/SinglePlayer";

const AvailablePlyaers = ({ playerPromise }) => {
  const playerData = use(playerPromise);
  console.log(playerData);
  return (
    <div className="grid grid-cols-1 p-5 m-4 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center items-center max-w-300 mx-auto">

      {
        playerData.map(player => <SinglePlayer key={player.id} player={player}></SinglePlayer>)
      }





      
    </div>
  );
};

export default AvailablePlyaers;
