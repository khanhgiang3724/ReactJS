import React from 'react';
import './App.css'
import Banner from './components/Banner';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Website/Home';
import Blog from './pages/Website/product/Blog';
function App() {
  return ( 
      <>
          <Header/>
          <Banner/>
          <Home/>
          <Blog/>
          <Footer/>
          
      </>
  )
      
}

export default App
