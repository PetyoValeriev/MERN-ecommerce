import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export const Home = () => {
  return (
    <div className='wrapper'>
        <header className='header'>
            <Header />
        </header>
        <main className='main'>
            Main
        </main>
        <footer className='footer'>
            <Footer />
        </footer>
    </div>
  )
}

export default Home