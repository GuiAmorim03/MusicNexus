const user_types = [
    // qualquer músico, bandas ou outros grupos
    {
        label: "Musicians",
        description: "Independent Artist or a Musical Group",
        image: "musician",
    },
    // empresas de grande dimensão
    {
        label: "Music Companies",
        description: "Record Labels or Advertising Companies",
        image: "music_companies",
    },
    // eventos
    {
        label: "Event Organizers",
        description: "Event Organizers or Promoters",
        image: "event_organizers",
    },
    // publico
    {
        label: "Music Fans",
        description: "People who love music",
        image: "fan",
    },
]

const videos = [
    {
        id: 1,
        title: "Good Boy",
        author: "Four & Half ft. Big Charles",
        instrument: "Mix",
        stars: 1427,
        type: 'original',
        protected: true,
    },
    {
        id: 2,
        title: "Live life",
        author: "Warmplay",
        instrument: "Guitar",
        stars: 5429,
        type: 'cover',
        protected: false,
    },
    {
        id: 3,
        title: "Sleepy Song",
        author: "Bruno Martian",
        instrument: "Voice", 
        stars: 342,
        type: 'original',
        protected: false,
    },
    {
        id: 4,
        title: "Many many stars",
        author: "Anthony Simmons",
        instrument: "Piano",
        stars: 121,
        type: 'original',
        protected: true,
    },
]

const events = [
    {
        type: "LOOKING",
        title: "Integra-te 2024",
        description: "Looking for a guitar player for the main stage",
        date: "2024-09-01",
        organizer: "AAUAV",
        link: "https://www.ua.pt/",
        interested: ["Warmplay"],
    },
    {
        type: "WORKSHOP",
        title: "Piano Masterclass",
        description: "Masterclass with the famous pianist Key Master at the university",
        date: "2024-11-19",
        organizer: "AAUAV",
        link: "https://www.ua.pt/",
    },
    {
        type: "WORKSHOP",
        title: "String Orchestra for beginners",
        description: "Come to play and gain some experience with our music students",
        date: "2025-02-17",
        organizer: "AAUAV",
        link: "https://www.ua.pt/",
    },
    {
        type: "LOOKING",
        title: "Enterro 2025",
        description: "Looking for a duo to sing on the open day",
        date: "2025-04-27",
        organizer: "AAUAV",
        link: "https://www.ua.pt/",
        interested: ["Warmplay", "Bruno Martian"],
    },
    {
        type: "LOOKING",
        title: "Rock in Rio 2025",
        description: "Looking for a band to play on the AB/CD day",
        date: "2025-06-27",
        organizer: "CM Lisboa",
        link: "https://www.ua.pt/",
        interested: ["Four & Half ft. Big Charles"]
    },
]

const users = [
    {
        name: "Four & Half ft. Big Charles",
        description: "Four & Half: we are a band from Portugal that sometimes plays with Big Charles",
        email: "fourh@gmail.com",
        phone: Math.floor(Math.random() * (999999999 - 1000000 + 1)) + 1000000,
        user_type: "Musicians",
    },
    {
        name: "Warmplay",
        description: "I'm starting to make some guitar covers",
        email: "warm@outlook.pt",
        phone: Math.floor(Math.random() * (999999999 - 1000000 + 1)) + 1000000,
        user_type: "Musicians",
    },
    {
        name: "Bruno Martian",
        description: "I'm a singer. I make original songs. I'm not from Mars.",
        email: "themartian@gmail.com",
        phone: Math.floor(Math.random() * (999999999 - 1000000 + 1)) + 1000000,
        user_type: "Musicians",
    },
    {
        name: "Anthony Simmons",
        description: "I don't need to be young to play piano",
        phone: Math.floor(Math.random() * (999999999 - 1000000 + 1)) + 1000000,
        email: "tonysimons@spao.pt",
        user_type: "Musicians",
    },
    {
        name: "AAUAV",
        description: "Associação Académica da Universidade de Aveiro",
        email: null,
        phone: null,
        user_type: "Event Organizers",
    }
]

data = {}
data.user_types = user_types;
data.videos = videos;
data.events = events;
data.users = users;
localStorage.setItem('musicNexus', JSON.stringify(data))