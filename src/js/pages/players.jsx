import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import contManager from "./../contentful_manager";

export default props => {
    const dispatch = useDispatch();
    const players = useSelector(state => state.players);
    console.log('players are: ', players);
    // players.items.map((item, index) => console.log(`players ${index}: `, item.fields.name['en-US'] || 'anonymous'));
    
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
            {players.items.map((player, index) => <li key={player.sys.id}>{player.fields.name ? index + ': ' + player.fields.name['en-US'] : 'anonymous'}</li>)}
            {/* {players.items.map((player, index) => <li key={index}>{player}</li>)} */}
            {/* {players && players.items.map((item, index) => <li key={index}>{(item.fields.name) ? item.fields.name['en-US'] : 'anonymous'}</li>)} */}
        </ul>
        </React.Fragment>
    )
}