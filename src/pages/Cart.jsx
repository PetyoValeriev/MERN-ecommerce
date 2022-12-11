import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Cart = () => {
  return (
    <div className='wrapper'>
        <header className='header'>
            <Header />
        </header>
        <main className='main'>
            Cart
        </main>
        <footer className='footer'>
            <Footer />
        </footer>
    </div>
  )
}

export default Cart