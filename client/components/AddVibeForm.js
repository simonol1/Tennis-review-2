import React from 'react'


export default class AddVibeForm extends React.Component {

  render () {
    return (
      <div className='form'>
        <form>
        <input type='text' name='id' placeholder='id' />
          <input type='image' id='image' name='image' placeholder="image" />
          <input type='text' name='quote' placeholder='quote' />
          <input type='text' name='author' placeholder='author' />
          <input type='submit' id='submit' value='Submit' />
        </form>
      </div>
    )}
}
