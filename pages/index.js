import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lightning Jobs RSS</title>
        <meta name="description" content="RSS feed for lightningjobs.app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Lightning Jobs RSS
        </h1>
        <p>
          <a href="https://lightningjobsrss.vercel.app/api/rss">RSS link</a>
        </p>
        <p>
          <a href="https://github.com/bordalix/lightningjobsrss">Github</a>
        </p>
      </main>
    </>
  )
}
