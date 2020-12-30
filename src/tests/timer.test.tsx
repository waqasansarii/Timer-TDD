import React from 'react'
import {render} from '@testing-library/react'
import Timer from '../component/timer'

    test('shuld render timer com',()=>{
        const container = render(<Timer />)
        expect(container).toBeInTheDocument
    })

    test('should render heading',()=>{
         const  heading= render(<Timer />)
         const headingElm = heading.getByRole('heading')
         expect(headingElm).toHaveTextContent('Timer App')
    })
    test('should render timer initial values hours, mins and seconds 00 ',()=>{
      const initial = render(<Timer />)
      const initialValue = initial.getAllByTestId('value')
      expect(initialValue).toHaveLength(3)
    })
    test ('should render texts',()=>{
      const span = render(<Timer />)
      expect(span.getByText(/hours/i && /minutes/i&&/seconds/i)).toBeInTheDocument()
    })
    
    
    test ('should render timerBatton comp',()=>{
      const btn = render(<Timer />)
      
      const btnElmt = btn.getAllByRole('button')
      expect(btnElmt).toHaveLength(3)
      
    })


