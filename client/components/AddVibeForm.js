import React from 'react'

import addVibe from '../actions/vibes'

export default class AddVibeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      AddVibeForm: {}
    }
  }

  handleChange(e) {
    e.preventDefault()
    this.props.dispatch(addVibe(this.state.AddVibeForm))
  }

  handleSubmit(e) {
    let vibe = [...this.state.vibe]
    vibe[evt.target.name] = evt.target.value
    this.setState({AddVibeForm: null})
  }

  render () {
    return (
      <div className='form'>
        <form>
        <input type='text' name='id' placeholder='id' onChange={(e) => this.handleChange(e)} />
          <input type='image' id='image' name='image' placeholder="image" onChange={(e) => this.handleChange(e)}/>
          <input type='text' name='quote' placeholder='quote' onChange={(e) => this.handleChange(e)} />
          <input type='text' name='author' placeholder='author' onChange={(e) => this.handleChange(e)}/>
          <input type='submit' id='submit' value='Submit' onSubmit={(e) => this.handleSubmit(e)} />
        </form>
      </div>
    )}
}
