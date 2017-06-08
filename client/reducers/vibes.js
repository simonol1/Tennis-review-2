
function vibes (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_VIBES':
      return [...action.vibes]

      case 'ADD_VIBES':
        return [...action.vibes]

    default:
      return state
  }
}

export default vibes
