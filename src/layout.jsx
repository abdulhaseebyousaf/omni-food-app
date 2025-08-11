import React from 'react'
import Header from '../src/common/Header'
import Footer from './common/Footer'
const layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
              <Header />
              <main>{children}</main>
            <Footer />
    </div>
  )
}

export default layout
