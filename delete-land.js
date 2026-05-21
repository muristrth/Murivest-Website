import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'frb1hevx',
  dataset: 'production',
  apiVersion: '2025-01-01',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
})

async function run() {
  const docs = await client.fetch(
    `*[_type == "landParcel"]._id`
  )

  console.log(`Deleting ${docs.length} docs`)

  await client.delete({
    query: '*[_type == "landParcel"]',
  })

  console.log('Deleted.')
}

run()