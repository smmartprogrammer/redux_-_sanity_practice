import { createClient } from 'next-sanity'


// export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJET_ID;
// export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
// export const api = process.env.NEXT_PUBLIC_SANITY_API;

export const client = createClient({
  apiVersion: "2023-07-18",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_API,
})
