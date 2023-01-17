import Head from 'next/head';
import Image from 'next/image';
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import styles from '../styles/pages/Home.module.css';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';


export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>
            Página Inicial | RBN Stress
        </title>
      </Head>
      <ExperienceBar />
    <section>
      <div>
        <Profile />
        <CompletedChallenges />
        <Countdown />
      </div>

      <div>
        <ChallengeBox />
      </div>
    </section>
    </div>
  )
}
