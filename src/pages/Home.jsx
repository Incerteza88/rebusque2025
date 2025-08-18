import { useState } from 'react'
import '../styles/index.css'
import useGlobalReducer from '../hooks/useGlobalReducer'

function App() {
  const { store, dispatch } = useGlobalReducer()
  console.log(store.prueba)
  return (
    <>
      <h1 className='prueba text-success'>Prueba</h1>
      <button className='btn btn-success' onClick={() => dispatch({ type: "prueba", payload: "hola" })}></button>
    </>
  )
}

export default App
