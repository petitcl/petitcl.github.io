import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello World !</title>
        <meta name="description" content="Main page for upcoming website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src={require("../public/logo.svg") } alt="Logo" width={50} height={42} />
        <h1 className={styles.title}>
          Welcome to my website !
        </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p>
      </main>

    </div >
  )
}
