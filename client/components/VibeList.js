import React from 'react'
import { connect } from 'react-redux'


class VibeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vibes: props.vibes || []
    }
  }
  componentWillReceiveProps(props) {
    this.setState({vibes: props.vibes || []})
  }
  renderVibe(vibe) {
    return <div>
      <img src={vibe.img_url}/>
      <h2>{vibe.quote}</h2>
    </div>
  }
  render() {
    return (
      <div>
        {this.state.vibes.map((vibe) => this.renderVibe(vibe))}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    vibes: state.vibes
  }
}

export default connect(mapStateToProps)(VibeList)
