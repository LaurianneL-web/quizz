/*
{
    isLoaded: false
}
*/

import { combineReducers } from "redux";
import api from "./../../utils/api";

const isLoaded = (state = false, action) => {
    switch (action.type) {
        case "SET_LOADED":
            return true;
        default:
            return state;
    }
};

const title = (state = '', action) => {
    switch (action.type) {
        case "SET_TITLE":
            return action.payload;
        case "RESET_TITLE":
            return '';
        default:
            return state;
    }
};

// const players = (state = [], action) => {
//     switch (action.type) {
//         case "SET_PLAYERS":
//             return action.payloads;
//         default:
//             return state;
//     }
// };

const getAllUsers = (state = [] || null, action) => {
    switch (action.type) {
        case "GET_USERS_PAYLOAD":
            return action.payload;
        case "GET_USERS":
            // return ['toto']
                api.then(api => {
                    api
                      .getEntries()
                      .then(entries => {
                          console.log('items', entries.items);
                        //   const = 'toto'
                          return entries.items;
                        // return ['toto']
                          // console.log('players', players); // Impossible because react need to reload component
                      })
                  });
        default:
            return state;
    }
};

// Alex set user
// const createEntry = function createEntry(entryName, data) {
//     api.then(env => {
//       env
//         .createEntry(entryName, {
//           fields: {
//             ...data
//           }
//         })
//         .then(res => {
//           api.then(env => {
//             env.getEntry(res.sys.id).then(entry => {
//               entry.publish()
//             })
//           })
//           console.log('reeeees', res.sys.id)
//         })
//         .catch(err => {
//           console.log(err)
//         })
//     })
//   }

export default combineReducers({
    isLoaded,
    getAllUsers,
    title,
    // players
});