import type { AppProps } from 'next/app'
import React from 'react';
import '../styles/global.css'
import {ChallengesContext, ChallengesProvider} from '../contexts/ChallengesContext' 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
    
  )
}

// function MyApp({Component, pageProps}: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp