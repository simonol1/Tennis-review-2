import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'

import App from '../../client/components/App'
import Header from '../../client/components/Header'
import Footer from '../../client/components/Footer'

import './setup-dom'

App.prototype.componentDidMount = () => {}


test('Heading renders on App', t => {
  const wrapper = mount(<Header />)
  t.is(wrapper.find('h1').text(), 'Good Vibes')
})

test('Footer renders on App', t => {
  const wrapper = mount(<Footer />)
  t.is(wrapper.find('h1').text(), 'Spread the vibe')
})
