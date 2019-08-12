import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import api from "./utils/api";

import Home from "./pages/home";

export default props => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(state => state.app.isLoaded);
  const [playerName, setPlayerName] = useState(null);

  useEffect(() => {
    dispatch({ type: "SET_LOADED" });

    // api.then(api => {
    //   api
    //     .getEntry("30DlkSFvmLSuAMN0rn9hwT")
    //     .then(entry => {
    //       entry.fields.name["en-US"] = "Super spongeBob";
    //       return entry.update();
    //     })
    //     .then(entry => {
    //       setPlayerName(entry.fields.name["en-US"]);
    //       console.log(`Entry ${entry.sys.id} updated.`);
    //     });
    // });
  }, []);

  const handleClick = () => {};

  if (!isLoaded) return <h1>Loading...</h1>;

  return (
    <div className="app-wrapper">
      <h1>App wrapper</h1>
      <Home />
      {playerName ? `Player name is : ${playerName}` : `Player name is : ...`}
      <button onClick={handleClick} className="block mt-4">
        Change the player name [PUT]
      </button>
    </div>
  );
};