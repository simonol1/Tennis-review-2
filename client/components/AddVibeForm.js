import React from 'react'
import { connect } from  'react-redux'

import {addVibe} from '../actions/vibes'

class AddVibeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vibe: {}
    }
  }

  onChangeHandler(e) {
    let vibe = this.state.vibe
    vibe[e.target.name] = e.target.value
    this.setState({vibe})
  }

  onSubmitHandler(e) {
    e.preventDefault()
    this.props.dispatch(addVibe(this.state.vibe))
    window.location.reload()
  }

  render () {
    return (
        <form className="form" onSubmit={(e) => this.onSubmitHandler(e)}>
          <input type='text' id='quote' name='quote' placeholder='quote' onChange={(e) => this.onChangeHandler(e)}/>
          <input type='text' id='image' name='image' placeholder="image url" onChange={(e) => this.onChangeHandler(e)}/>
          <input type='text' name='author' placeholder='author' onChange={(e) => this.onChangeHandler(e)}/>
          <input type='submit' id='submit' value='Submit' />
        </form>
    )}
}

function mapStateToProps (state) {
  return {
    vibe:state.vibe
  }
}

export default connect(mapStateToProps)(AddVibeForm)
