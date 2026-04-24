
import { Suspense } from 'react'
import './App.css'
import Banner from './banner/Banner'
import Hero from './hero/Hero'
import Main from './hero/main/Main'
import Navbar from './navbar/Navbar'

const fetchData = async() => {
    const res = await fetch('/public/data.json')
    return res.json();
}

function App() {
 const productPromise = fetchData();
 

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Hero></Hero>
      {/* <Main></Main> */}
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <Main productPromise={productPromise}></Main>
      </Suspense>
    </div>
  )
}

export default App
