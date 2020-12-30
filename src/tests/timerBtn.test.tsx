import React from 'react'
import {render} from '@testing-library/react'
import TimerButton from "../component/timerBatton";

test('should render <div />',()=>{
    const elmt = render(<TimerButton />)
 expect(elmt.getByTestId('main-div')).toBeInTheDocument()
})
