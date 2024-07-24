import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux';

function HooksCakeComponent() {
    const numOfCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Number of Cakes {numOfCakes}</h1>
            <button onClick={() => dispatch(buyCake)}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeComponent