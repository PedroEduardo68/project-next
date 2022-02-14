import { Component } from "react"
import GlobalStyle from '../src/components/theme/index'


const MyApp = ({Component, pageProps}) =>{
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}


export default MyApp;