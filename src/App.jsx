import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'
import InputDataProvider from './store/InputDataProvider'
// import { useInputData } from './store/contextApi';

function App() {
  return (
    <>
    <InputDataProvider>
      <Header />
      <Outlet />
    </InputDataProvider>
    </>
  )
}

export default App
