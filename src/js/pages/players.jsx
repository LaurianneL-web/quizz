import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import contManager from "./../contentful_manager";

export default props => {
    const dispatch = useDispatch();
    const players = useSelector(state => state.players);
    useEffect(() => {
        contManager.getEntries('player').then(entries => {
            // console.log('entries',entries.items)
            dispatch({ type: 'SET_PLAYERS', payload: entries.items })
          })
        // dispatch({type: 'SET_PLAYERS', payload: ['ha', 'ho']})
    }, [])

    if (!players) return <h1>Players are Loading...</h1>;
    return(
        <React.Fragment>
        <h1>PlayersPage</h1>
        <ul>
            {players.items.map((player, index) => <li key={player.sys.id}>{player.fields.name['en-US']}</li>)}
        </ul>
        </React.Fragment>
    )
}