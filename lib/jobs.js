import { parse } from 'node-html-parser'

export async function getJobs() {
  const url = 'https://lightningjobs.app'
  const res = await fetch(url)
  const data = await res.text()
  const root = parse(data)
  return root.querySelectorAll('.job-expander').map(job => (
    {
      company: job.querySelector('.company-name').text,
      date: job.querySelector('.date-posted').text,
      link: job.querySelector('.apply-button').getAttribute('href'),
      location: job.querySelector('.location').text || 'No location',
      remote: job.querySelector('.remote').text || 'Office',
      salary: job.querySelector('.job-salary').text,
      title: job.querySelector('.job-name').text,
    }
  ))
}
