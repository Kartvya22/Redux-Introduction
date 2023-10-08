import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';

function Counter() {

    // we use useSelector() hook to fetch any value or data from slices
    // it provide functionality to fetch data from slice state
    // we use one callback function in useSelector()
    // it is useful for data read from slices
    const count = useSelector((state) => state.counter.value);

    // we use useDispatch() hook to fetch any fuction from action creater of slice
    // it provide functionality to fetch function from reducers of slice from actions creater
    // it is useful for data write to slices
    const dispatch = useDispatch();


  return (
    <div className='flex flex-col justify-center items-center'>
        <button onClick={() => dispatch(increment())} className='text-2xl font-bold'>Increment</button>
        <div className='text-4xl font-bold'>{count}</div>
        <button  onClick={() => dispatch(decrement())} className='text-2xl font-bold'>Decrement</button>
        {/* for disabling the decrement button below the 0 count */}
        {/* disabled={count === 0 ? true : false} */}
    </div>
  )
}

export default Counter