import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'
import { useInputData } from './store/contextApi';

function App() {
  return (
    <>
    <Header />
    <Outlet />

    </>
  )
}

export default App
