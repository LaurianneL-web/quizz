import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";
import api from "./../utils/api";
import contManager from "./contentful_manager";


import Home from "./pages/home";
import PlayersPage from "./pages/players";
import contentful_manager from "./contentful_manager";

export default props => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(state => state.app.isLoaded);
  const players = useSelector(state => state.app.getAllUsers);
  const [playerName, setPlayerName] = useState(null);
  const [name, setName] = useState('');
//   const [players, setPlayers] = useState(null);

  useEffect(() => {
    dispatch({ type: "SET_LOADED" });
    dispatch({ type: "SET_TITLE", payload: 'title'});
    // dispatch({ type: "GET_USERS"});
    // dispatch({ type: "GET_USERS_PAYLOAD", payload: asyncUsers});

    // const asyncUsers = function asyncUsers() {
    //     api.then(api => {
    //         api
    //           .getEntries()
    //           .then(entries => {
    //               console.log('items', entries.items);
    //             //   const = 'toto'
    //               return entries.items;
    //             // return ['toto']
    //               // console.log('players', players); // Impossible because react need to reload component
    //           })
    //       });
    // }

    console.log('players', players)

    api.then(api => {
      api
        .getEntry("7t3cgyB5OEEj0uf7mCKPRN")
        .then(entry => {
          entry.fields.name["en-US"] = "Super CACAHUETE";
          return entry.update();
        })
        .then(entry => {
          setPlayerName(entry.fields.name["en-US"]);
          console.log(`Entry ${entry.sys.id} updated.`);
        });
    });

    // console.log('store.getState()', store.getState())

    // api.then(api => {
    //   api
    //     .getEntries()
    //     .then(entries => {
    //         console.log('items', entries.items);
    //         setPlayers(entries.items);
    //         // console.log('players', players); // Impossible because react need to reload component
    //     })
    // });
  }, []);

  const handleClick = () => {};
  const createUser = () => {
      console.log(name)
      contManager.createEntry('player', {
          name: {"en-US": name}
      })
  };


  if (!isLoaded) return <h1>Loading...</h1>;
  if (!players) return <h1>Loading...</h1>;
  console.log("render", players)

  return (
    <div className="app-wrapper">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/players">Players</NavLink>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/players" exact component={PlayersPage} />
      </Switch>
      
      <h1>App to add and see players</h1>
      {/* <Home /> */}
      {playerName ? `Player name is : ${playerName}` : `Player name is : ...`}
      <button onClick={handleClick} className="block mt-4">
        Change the player name [PUT]
      </button>
      <input type="text" value={name} name="name" onChange={e => {console.log(e.target.value); setName(e.target.value)}}/>
      <button onClick={createUser()}>addUser</button>
      <section>
          {players ? players.map((player, index) => {
              return <li key={index}>{player.fields.name["en-US"]}</li>
          }) : `No players`}
      </section>
    </div>
  );
};