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

data = {}
data.user_types = user_types;
localStorage.setItem('musicNexus', JSON.stringify(data))