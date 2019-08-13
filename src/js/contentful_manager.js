import api from "./../utils/api"
import { resolve } from "q";

// Alex set user
const createEntry = function createEntry(entryName, data) {
    api.then(env => {
      env
        .createEntry(entryName, {
          fields: {
            ...data
          }
        })
        .then(res => {
          api.then(env => {
            env.getEntry(res.sys.id).then(entry => {
              entry.publish()
            })
          })
          console.log('reeeees', res.sys.id)
        })
        .catch(err => {
          console.log(err)
        })
    })
  }

  const getEntries = function getEntries() {
      return new Promise((resolve, reject) => {
        api.then(api => {
            api
              .getEntries()
              .then(entries => {
                //   console.log('state entries', entries)
                  resolve(entries)
              })
          });
        }
    );
  };

export default ({
    createEntry,
    getEntries
});