const authors = {
  affordableHousing: [
    "Mark Muriithi",
    "Grace Wanjiru",
    "Kevin Kiptoo",
    "Faith Njeri",
    "Brian Mwangi",
  ],

  investment: [
    "James Mwangi",
    "Diana Chebet",
    "Victor Otieno",
    "Dennis Kariuki",
    "Ian Kiplagat",
  ],

  development: [
    "Sarah Wambui",
    "Collins Kiprono",
    "Mercy Atieno",
    "Peter Mutiso",
  ],

  locationInsights: [
    "David Ochieng",
    "Lilian Akinyi",
    "Samuel Kiptoo",
    "Sharon Wairimu",
  ],
}

function hashString(str: string): number {
  let hash = 0

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }

  return Math.abs(hash)
}

export function getAuthor(
  category: string,
  tags: string[] = [],
  slug: string = ""
): string {

  const normalized = category.toLowerCase()

  let pool: string[] = []

  if (normalized.includes("affordable")) {
    pool = authors.affordableHousing
  }

  else if (normalized.includes("investment")) {
    pool = authors.investment
  }

  else if (normalized.includes("development")) {
    pool = authors.development
  }

  else if (normalized.includes("location")) {
    pool = authors.locationInsights
  }

  else {
    pool = [
      "Mark Muriithi",
      "James Mwangi",
      "Grace Wanjiru",
      "Sarah Wambui",
    ]
  }

  const seed = `${category}-${tags.join("-")}-${slug}`

  const index = hashString(seed) % pool.length

  return pool[index]
}