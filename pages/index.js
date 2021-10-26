import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lightning Jobs RSS</title>
        <meta name="description" content="RSS feed for lightningjobs.app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Lightning Jobs RSS
        </h1>

        <p className={styles.description}>
          Available at <a href="https://lightningjobsrss.vercel.app/api/rss">https://lightningjobsrss.vercel.app/api/rss</a>
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/bordalix/lightningjobsrss">Github</a>
      </footer>
    </div>
  )
}
