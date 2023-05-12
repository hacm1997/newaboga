import '../styles/globals.css'
import 'boxicons/css/boxicons.min.css'
import type { AppProps } from 'next/app'
import TagManager from 'react-gtm-module'
import {useEffect} from "react";
import ReactGA from "react-ga4";

// ReactGA.initialize("G-9C6MVSP1B3");
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    const tagManagerArgs = {
      gtmId: 'GTM-K2FSCKH'
    }

    TagManager.initialize(tagManagerArgs)
  },[])
  return <Component {...pageProps} />
}

export default MyApp
