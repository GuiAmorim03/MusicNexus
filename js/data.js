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
    },
    {
        id: 2,
        title: "A Vida é Boa",
        author: "Jogo Frio",
        instrument: "Guitar",
        stars: 5429,
        type: 'cover',
    },
    {
        id: 3,
        title: "Canção da Preguiça",
        author: "Bruno Marciano",
        instrument: "Voice", 
        stars: 342,
        type: 'original',
    },
    {
        id: 4,
        title: "Muitas Estrelas",
        author: "António Simões",
        instrument: "Piano",
        stars: 121,
        type: 'original',
    },
]

const users = [
    {
        name: "Four & Half ft. Big Charles",
        description: "Four & Half: we are a band from Portugal that sometimes plays with Big Charles",
        email: "fourh@gmail.com",
    },
    {
        name: "Jogo Frio",
        description: "I'm starting to make some guitar covers",
        email: "jogo@outlook.pt",
    },
    {
        name: "Bruno Marciano",
        description: "I'm a singer. I make original songs. I'm not from Mars.",
        email: "themartian@gmail.com",
    },
    {
        name: "António Simões",
        description: "I don't need to be young to play piano",
        email: "tonysimons@spao.pt",
    },
    {
        name: "AUAAV",
        description: "Associação Académica da Universidade de Aveiro",
        email: null,
    }
]

data = {}
data.user_types = user_types;
data.videos = videos;
data.users = users;
localStorage.setItem('musicNexus', JSON.stringify(data))