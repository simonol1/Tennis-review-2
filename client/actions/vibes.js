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
