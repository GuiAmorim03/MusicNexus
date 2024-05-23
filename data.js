const user_types = [
    // qualquer músico
    {
        label: "Musician",
        description: "Independent Artist",
        image: "musician",
    },
    // bandas ou grupos musicais
    {
        label: "Musical groups",
        description: "Bands or Orchestras",
        image: "musical_groups",
    },
    // empresas de grande dimensão
    {
        label: "Music Companies",
        description: "Record Labels or Advertising Companies",
        image: "music_companies",
    },
    // publico
    {
        label: "Music Fan",
        description: "People who love music",
        image: "fan",
    },
]

data = {}
data.user_types = user_types;
localStorage.setItem('musicNexus', JSON.stringify(data))