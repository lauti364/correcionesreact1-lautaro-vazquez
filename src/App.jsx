import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import { ItemCount } from './components/ItemCount'
import { Navbar } from './components/Navbar'

import { ItemListContainer } from './components/ItemListContainer'
import { Cart } from './components/Cart'
import { NotFound } from './components/NotFound'
import{footer} from './components/footer'
import {Checkout} from './components/Checkout'
import {ItemDetailsContainer} from './components/ItemDetailsContainer'

export const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido a la pagina de zapatillas mas grande de Buenos Aires"} />
      <ItemCount />  
      <footer />
    </>
  )
}


export default App;