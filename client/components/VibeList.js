import React from 'react'
import { connect } from 'react-redux'

import getVibes from '../actions/vibes'


const renderVibe = (vibe) => (
      <div>
        <img src={vibe.image}/>
        <p>{vibe.quote}</p>
        <p>{vibe.author}</p>
      </div>
  )

const Vibes = ({vibes, dispatch}) => (
  <div>
    <button onClick={() => dispatch(getVibes())}>Show Vibes</button>
    {vibes.map(renderVibe)}
  </div>
)


const mapStateToProps = (state) => {
  return {
    vibes: state.vibes
  }
}

export default connect(mapStateToProps)(Vibes)
