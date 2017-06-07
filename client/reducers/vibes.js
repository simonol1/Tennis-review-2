let initialState = [
  {
    id: 2,
    img_url: 'http://bit.ly/2sRdiBL',
    quote: 'I want to be the best',
    author: 'Harrison'
  },
  {
    id: 3,
    img_url: 'http://bit.ly/2sR7t7f',
    quote: 'You can be the best',
    author: 'Harrison'
  }
]

function vibes (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_VIBES':
      return [...action.vibes]
    default:
      return state
  }
}

export default vibes
