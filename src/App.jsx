import './app.css'
import React from 'react';
import { ItemCount } from './components/ItemCount'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'

export const App = () => {
  return (
    <>
      <Navbar />
      <ItemCount />
      <ItemListContainer greeting={"Bienvenido a la pagina de zapatillas mas grande de Buenos Aires"} />
    </>
  )
}

export default App;