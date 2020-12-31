import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import * as ReactDOM from 'react-dom'
import Timer from '../component/timer'
import { act } from 'react-dom/test-utils'

test('shuld render timer com', () => {
  const container = render(<Timer />)
  expect(container.getByTestId("timer")).toBeInTheDocument()
})

test('should render heading', () => {
  const heading = render(<Timer />)
  const headingElm = heading.getByRole('heading')
  expect(headingElm).toHaveTextContent('Timer App')
})
test('should render timer initial values hours, mins and seconds 00 ', () => {
  const initial = render(<Timer />)
  const initialValue = initial.getAllByText(/00/i)
  expect(initialValue).toHaveLength(3)
})
test('should render texts', () => {
  const span = render(<Timer />)
  expect(span.getByText(/hours/i && /minutes/i && /seconds/i)).toBeInTheDocument()
})

test('start btn', () => {
  const start = render(<Timer />)
  expect(start.getByText(/start/i)).toBeInTheDocument()

})


it('start and stop onclick', () => {

  const startbtn = render(<Timer />)
  const btnelm = startbtn.getByText(/start/i)
  expect(btnelm).toBeTruthy()
  act(() => {
    fireEvent.click(btnelm)
    
  })
  expect(btnelm.innerHTML).toBe("stop")
  

})





