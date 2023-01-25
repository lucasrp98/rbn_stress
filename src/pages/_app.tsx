import type { AppProps } from 'next/app'
import React from 'react';
import '../styles/global.css'
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdownContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}

// function MyApp({Component, pageProps}: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp