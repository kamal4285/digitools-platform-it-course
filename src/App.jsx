
import { Suspense } from 'react'
import './App.css'
import Banner from './banner/Banner'
import Hero from './hero/Hero'
import Main from './hero/main/Main'
import Navbar from './navbar/Navbar'
import Steps from './navbar/steps/Steps'
import PricingOptions from './pricingSection/PricingOptions'
import Footer from './footer/Footer'
import { ToastContainer } from 'react-toastify'

const fetchData = async() => {
    const res = await fetch('/data.json')
    return res.json();
}

// const pricingData = async() => {
//   const res = await fetch('/public/pricingData.json')
//   return res.json();
// }

const pricingPromise = fetch('/pricingData.json').then(res => res.json());

function App() {

 const productPromise = fetchData();

//  const pricingPromise = pricingData();
 

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Hero></Hero>
      {/* <Main></Main> */}
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <Main productPromise={productPromise}></Main>
      </Suspense>
      <Steps></Steps>
      <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
