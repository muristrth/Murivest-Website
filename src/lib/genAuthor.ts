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
    "Mark Muriithi",
    "Murivest Realty",
    "James Mwangi",
    "Diana Chebet",
    "Victor Otieno",
    "Dennis Kariuki",
    "Ian Kiplagat",
    "Mark Muriithi",
    "Murivest Realty",
    "Alice Wanjiku",
    "Brian Omondi",
    "Catherine Nduta",
    "David Kiprop",
    "Esther Akinyi",
    "Francis Kamau",
    "Grace Mutua",
    "Henry Nyongesa",
    "Irene Wairimu",
    "John Ochiena",
    "Kevin Koech",
    "Lilian Awuor",
    "Michael Maina",
    "Nancy Wanjiru",
    "Oscar Omwamba",
    "Patricia Cherotich",
    "Peter Kimani",
    "Rachel Nafula",
    "Samuel Njoroge",
    "Teresa Atieno",
    "Vincent Kipkemoi",
    "Winifred Muthoni",
    "Xavier Odhiambo",
    "Yvonne Kwamboka",
    "Zachary Wafula",
    "Anthony Githinji",
    "Beatrice Adhiambo",
    "Charles Kiptoo",
    "Dorothy Wangari",
    "Emmanuel Juma",
    "Faith Chepkorir",
    "George Ochieng",
    "Hellen Mwende",
    "Isaac Kipruto",
    "Joyce Wambui",
    "Kenneth Langat",
    "Lucy Njeri",
    "Martin Onyango",
    "Mercy Chepngetich",
    "Nicholas Mutuku",
    "Olivia Anyango",
    "Patrick Murungi",
    "Rosemary Wanza",
    "Simon Karoki",
    "Susan Kendi",
    "Thomas Okoth",
    "Valerie Jemutai",
    "William Oduor",
    "Agnes Muthoni",
    "Benard Kipchirchir",
    "Caroline Nyambura",
    "Daniel Makori",
    "Evelyn Chanya",
    "Fredrick Ndwiga",
    "Gladys Chebet",
    "Humphrey Omondi",
    "Immaculate Okello",
    "Josephat Kilonzo",
    "Judy Waweru",
    "Kelvin Kipkoech",
    "Lydia Akoth",
    "Moses Gitau",
    "Naomi Nthenya",
    "Oliver Kiprotich",
    "Peninah Wangui",
    "Philip Etyang",
    "Ruth Nyaboke",
    "Stephen Omwenga",
    "Tabitha Wanjiku",
    "Victor Kiptanui",
    "Veronica Moraa",
    "Wilfred Simiyu",
    "Agatha Wambere",
    "Boniface Mwangi",
    "Christine Cynthia",
    "Duncan Shisanya",
    "Elizabeth Khakasa",
    "Felix Kipyegon",
    "Gloria Chepkoech",
    "Harun Ocan",
    "Ivy Chelimo",
    "Jackson Maloba",
    "Jacqueline Muringo",
    "Kennedy Macharia",
    "Leah Chepkemoi",
    "Mathew Ondieki",
    "Miriam Were",
    "Nathaniel King'ori",
    "Phyllis Kwambai",
    "Richard Odour",
    "Sarah Wakesho",
    "Timothy Waithaka",
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