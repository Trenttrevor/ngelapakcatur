export type TeamType = {
  id: number
  nameTeam: string
  img: string
  amountMember: number
  eloAverage: number
  address: string
  latitude: number
  longitude: number
  active: boolean
  members: {
    name: String
    elo: number
  }[]
}

export const dataTeam: TeamType[] = [
  {
    id: 1,
    nameTeam: "Schachclub Leipzig-Gohlis",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGdAdYDnD06UN4WlDB0GpmTUGD35DFkdqzaA&s",
    amountMember: 11,
    eloAverage: 1820,
    address: "Michael-Kazmierczak-Straße 31, 04157 Leipzig",
    latitude: 51.2841831,
    longitude: 12.2244921,
    active: true,
    members: [
      {
        name: "Thomas Nurnberg",
        elo: 2300,
      },
      {
        name: "Arnold Almeida",
        elo: 2110,
      },
      {
        name: "Rico",
        elo: 2310,
      },
      {
        name: "Alfred Müller",
        elo: 2009,
      },
    ],
  },
  {
    id: 2,
    nameTeam: "Denksportzentrum Schachgemeinschaft",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_knight_white.svg/512px-Chess_knight_white.svg.png",
    amountMember: 18,
    eloAverage: 1750,
    address: "Petzscher Str. 1, Leipzig",
    latitude: 51.322012,
    longitude: 12.3426345,
    active: true,
    members: [
      {
        name: "Lukas Fischer",
        elo: 1875,
      },
      {
        name: "Johannes Becker",
        elo: 1950,
      },
      {
        name: "Maximilian Wagner",
        elo: 2220,
      },
      {
        name: "Felix Hoffmann",
        elo: 2055,
      },
    ],
  },
  {
    id: 3,
    nameTeam: "Schachclub Leipzig-Lindenau",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_rlt45.svg/512px-Chess_rlt45.svg.png",
    amountMember: 9,
    eloAverage: 1680,
    address: "Tintlingsweg 5, Leipzig",
    latitude: 51.276124,
    longitude: 12.1528089,
    active: false,
    members: [
      {
        name: "Leonhard Schuster",
        elo: 2380,
      },
      {
        name: "Sebastian Krüger",
        elo: 1995,
      },
      {
        name: "Niklas Braun",
        elo: 1830,
      },
    ],
  },
  {
    id: 4,
    nameTeam: "Spieltische Schach & Mühle",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_plt45.svg/512px-Chess_plt45.svg.png",
    amountMember: 14,
    eloAverage: 1725,
    address: "Leipzig",
    latitude: 51.2602094,
    longitude: 12.3353082,
    active: true,
    members: [
      {
        name: "Paul Hartmann",
        elo: 2140,
      },
      {
        name: "Moritz Lange",
        elo: 2265,
      },
      {
        name: "Tobias Neumann",
        elo: 2080,
      },
    ],
  },
  {
    id: 5,
    nameTeam: "SG Turm Leipzig",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_blt45.svg/512px-Chess_blt45.svg.png",
    amountMember: 12,
    eloAverage: 1790,
    address: "Ringstraße 2, Leipzig",
    latitude: 51.3143116,
    longitude: 12.204351,
    active: false,
    members: [
      {
        name: "Florian Keller",
        elo: 1925,
      },
      {
        name: "Daniel Vogt",
        elo: 2350,
      },
    ],
  },
  {
    id: 6,
    nameTeam: "SV Springer Leipzig",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_rdt45.svg/512px-Chess_rdt45.svg.png",
    amountMember: 20,
    eloAverage: 1850,
    address: "Prinz-Eugen-Straße 1, Leipzig",
    latitude: 51.284078,
    longitude: 12.3004434,
    active: true,
    members: [
      {
        name: "Andreas Schmid",
        elo: 2010,
      },
      {
        name: "Christian Wolf",
        elo: 2195,
      },
      {
        name: "Patrick Günther",
        elo: 1860,
      },
      {
        name: "Stefan Krause",
        elo: 2325,
      },
    ],
  },
  {
    id: 7,
    nameTeam: "TSG Markkleeberg ",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_rdt45.svg/512px-Chess_rdt45.svg.png",
    amountMember: 41,
    eloAverage: 2300,
    address: "Sportpark Städtelner",
    latitude: 51.2692856,
    longitude: 12.3699075,
    active: true,
    members: [
      {
        name: "Martin Weiss",
        elo: 1940,
      },
      {
        name: "Julian Herrmann",
        elo: 2075,
      },
      {
        name: "Dominik Frank",
        elo: 2230,
      },
      {
        name: "Oliver König",
        elo: 1890,
      },
    ],
  },
]
