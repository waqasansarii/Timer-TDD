import React from 'react';
import { getByText, render, screen,cleanup } from '@testing-library/react';
import App from '../App';


afterEach(cleanup)
test ('should render App com',()=>{
  const {asFragment} = render(<App />)
  // const element = app.getByTestId('custom-element')
  expect(asFragment()).toMatchSnapshot()
})