import React from 'react';
import {  render, cleanup } from '@testing-library/react';
import App from '../App';



afterEach(cleanup)
test ('should render App com',()=>{
  const {debug} = render(<App />)
  debug()
  // expect(asFragment()).toMatchSnapshot()
})