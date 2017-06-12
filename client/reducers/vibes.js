
function vibes (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_VIBES':
      return [...action.vibes]

    case 'ADD_NEW_VIBE':
      return [...action.vibe]

    default:
      return state
  }
}


export default vibes
