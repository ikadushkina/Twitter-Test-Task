import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CampsPage from './CampsPage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Camps</title>
      </Head>
      <header className={styles.header} />
      <main>
        <CampsPage />
      </main>
    </div>
  )
}
