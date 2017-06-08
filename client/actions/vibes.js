import request from 'superagent'

const receiveVibes = (vibes) => {
  return {
    type: 'RECEIVE_VIBES',
    vibes
  }
}

const addNewVibe = (vibe) => {
  return {
    type: 'ADD_VIBE',
    vibe
  }
}

function getVibes () {
  return (dispatch) => {
    request
      .get(`/api/vibes`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveVibes(res.body))
      })
  }
}


function addVibe (vibe) {
  return (dispatch) => {
    request
      .post(`/api/add`)
      .send(vibe)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(addnewVibe(res.body))
      })
  }
}

module.exports =
addVibe,
getVibes
