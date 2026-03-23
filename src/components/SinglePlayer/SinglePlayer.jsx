import React from 'react';
import playerFlag from "../../assets/flag.png";
import userIcon from "../../assets/user.png";

const SinglePlayer = ({player}) => {
  return (
    <div>
      <div className="card border bg-base-100  shadow-sm p-4">
        <figure>
          <img
            src={player.playerImage}
          />
        </figure>
        <div className="mt-4">
          <div className="flex">
            <img src={userIcon} alt="" />
            <h2 className="card-title ml-2">{player.playerName}</h2>
          </div>
          <div className="flex justify-between mt-4 border-b border-e-gray-600 pb-2">
            <div className="flex items-center">
              <img className="w-7 h-7 mr-2" src={playerFlag} alt="" />
              <span className="text-gray-300">{player.playerCountry}</span>
            </div>
            <button className="btn">{player.playerRole}</button>
          </div>

          <div className="flex justify-between mt-4">
            <span className="font-bold">Rating</span>
            <span>{player.playerRating}</span>
          </div>
          <div className="flex justify-between mt-4">
            <span className="font-bold">{player.playerBattingStyle}</span>
            <span>{player.playerBowlingStyle}</span>
          </div>

          <div className="card-actions mt-3 flex justify-between items-center">
            <p className="font-bold">Price: $ {player.playerPrice} USD</p>
            <button className="btn">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;