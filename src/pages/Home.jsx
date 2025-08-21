import { useState } from 'react'
import '../styles/index.css'
import useGlobalReducer from '../hooks/useGlobalReducer'

function App() {
  const { store, dispatch } = useGlobalReducer()
  console.log(store.prueba)
  return (
    <>
      <h1 className='prueba text-success'>Prueba</h1>
      <button className='btn btn-primary' onClick={() => dispatch({ type: "prueba", payload: "hola" })}>hola </button>
    </>
  )
}

export default App
