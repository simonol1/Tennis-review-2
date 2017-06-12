import request from 'superagent'

const receiveVibes = (vibes) => {
  return {
    type: 'RECEIVE_VIBES',
    vibes
  }
}

export function getVibes () {
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

const addNewVibe = (vibe) => {
  return {
    type: 'ADD_NEW_VIBE',
    vibe
  }
}

export function addVibe (vibe) {
  return (dispatch) => {
    request
      .post(`/api/new_vibe`)
      .send(vibe)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(addNewVibe(res.body))
      })
  }
}
