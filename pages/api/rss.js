import { generateRssFeed } from '../../lib/rss';
import { getJobs } from '../../lib/jobs';

export default async function handler(req, res) {
  try {
    const jobs = await getJobs()
    res.status(200).send(generateRssFeed(jobs))
  } catch(error) {
    console.log(error)
    res.status(500).send('Something went wrong')
  }
}
