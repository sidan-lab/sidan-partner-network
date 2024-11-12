export interface PartnerProps {
  name: string /* Name of the partner */;
  title: string /* Title of the partner */;
  photo: string /* URL of the partner's photo */;
}

export interface MarkerProps {
  partners: PartnerProps[];
  country: string;
  coordinates: [number, number] /* [longitude, latitude] */;
  position?:
    | "up"
    | "down" /* For whether the text shows above the marker or below */;
  link?: string /* Link to social media */;
  city?: string;
}

export const markers: MarkerProps[] = [
  {
    partners: [
      {
        name: "Jingles",
        title: "Founder - MeshJS ",
        photo: "https://avatars.githubusercontent.com/u/1694368?v=4",
      },
    ],
    coordinates: [103.851959, 1.29027],
    link: "https://x.com/jinglescode",
    country: "Singapore",
  },
  {
    partners: [
      {
        name: "Leon Lai",
        title: "SWE - Sidan",
        photo:
          "https://media.licdn.com/dms/image/v2/D5603AQHS9S3uYk4jaw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683259833605?e=1736985600&v=beta&t=GoCXV0OoZU665t-BiwHxgMAfw0E70bxQEt4AlljjL8Y",
      },
    ],
    coordinates: [-79.347015, 43.65107],
    position: "up",
    country: "Canada",
    city: "Toronto",
    link: "https://www.leonlai.space/",
  },
  {
    partners: [
      {
        name: "Hinson Wong",
        title: "Co-Founder - Sidan",
        photo:
          "https://media.licdn.com/dms/image/v2/D5603AQFJZihEKPn12w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1663309690855?e=1736985600&v=beta&t=3e3uspXlsVqtAV-hjccVYCRBIAYvfv5ipzSHt1DYFho",
      },
      {
        name: "Anson Chui",
        title: "Co-Founder - Sidan",
        photo:
          "https://media.licdn.com/dms/image/v2/D5603AQH21yu3iuUc5A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1677923290040?e=1736985600&v=beta&t=PAFpBWR0NL3oLqd3wXL0gGAOQ5xsjcTCnOuYT7RuKoE",
      },
      {
        name: "Neal Lam",
        title: "Co-Founder - Sidan",
        photo:
          "https://media.licdn.com/dms/image/v2/D5603AQFqE9nmvJIWOQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714728258011?e=1736985600&v=beta&t=meJRARBWlNiRkM0391qiAKwQNrOZRpzia5rg4EvAh4o",
      },
      {
        name: "Jackal Leung",
        title: "Co-Founder - Sidan",
        photo:
          "https://media.licdn.com/dms/image/v2/D5603AQF8icUT8GZMWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1688024023579?e=1736985600&v=beta&t=Kc8n7347e-Jiq51famaOtjSVXkZojWm4N2LYNaAj9gQ",
      },
    ],
    coordinates: [114.177216, 22.302711],
    position: "up",
    country: "Hong Kong",
    link: "https://x.com/sidan_lab",
  },
];
