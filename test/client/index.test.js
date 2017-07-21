import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'

import App from '../../client/components/App'
import Header from '../../client/components/Header'
import Footer from '../../client/components/Footer'
import AddVibeForm from '../../client/components/AddVibeForm'
import store from '../../client/store'

import './setup-dom'

App.prototype.componentDidMount = () => {}


test('Heading renders on App', t => {
  const wrapper = mount(<Header />)
  t.is(wrapper.find('h1').text(), 'Good Vibes')
})

test('Form renders on App', t => {
  const wrapper = mount(<AddVibeForm store={store} />)
  console.log(wrapper.html());
  // t.is(wrapper.find('form').text(), )
})

test('Footer renders on App', t => {
  const wrapper = mount(<Footer />)
  t.is(wrapper.find('h5').text(), 'Spread the vibe')
})
