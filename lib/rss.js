import MD5 from "crypto-js/md5";

const generateRssItem = (item) => {
  // the guid must be a full url and unique in a feed,
  // but sometimes we receive '#' as link, which is not a full url
  // and will generate duplicate entries on the feed.
  const buildLink = (title) => {
    const md5hash = MD5(title).toString()
    return `https://lightningjobs.app/#${md5hash}`
  }
  const date  = item.date
  const title = item.title + ' @ '
              + item.company + ' // '
              + item.location + ' // '
              + item.remote + ' '
              + item.salary
  const link  = item.link === '#' ? buildLink(title) : item.link
  return `
        <item>
          <guid>${link}</guid>
          <title><![CDATA[${title}]]></title>
          <link>${link}</link>
          <pubDate>${new Date(date).toUTCString()}</pubDate>
        </item>
  `
}

export function generateRssFeed(jobs) {
  const desc = 'Find your next lightning network job'
  const items = jobs.map(generateRssItem).join('')
  const self = 'https://lightningjobsrss.vercel.app/api/rss'
  const title = 'Lightning Jobs'
  const url = 'https://lightningjobs.app'
  return `
    <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
      <channel>
        <title>${title}</title>
        <link>${url}</link>
        <description>${desc}</description>
        <language>en</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${self}" rel="self" type="application/rss+xml"/>
        ${items}
      </channel>
    </rss>
  `
}
