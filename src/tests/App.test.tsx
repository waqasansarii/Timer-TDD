import React from 'react';
import * as ReactDOM from 'react-dom'
import { getByText, render, screen,cleanup } from '@testing-library/react';
import App from '../App';



afterEach(cleanup)
test ('should render App com',()=>{
  const {debug} = render(<App />)
  debug()
  // expect(asFragment()).toMatchSnapshot()
})