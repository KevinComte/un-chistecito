import { useState, useContext } from 'react'
import { UnChistecitoProvider, unChistecitoContext } from './context';
import Layout from './components/layout';
import Category from './components/category';
import Chiste from './components/chiste';
import Theme from './components/theme';
import Footer from './components/footer';
import './App.css'

function App() {

  return (
    <UnChistecitoProvider>
        <Layout>
          <Category />
          <Chiste />
          <Theme />
          <Footer />
        </Layout>
    </UnChistecitoProvider>
  )
}

export default App
