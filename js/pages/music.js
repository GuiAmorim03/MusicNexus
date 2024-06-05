data = JSON.parse(localStorage.getItem('musicNexus'))
if (data) {
    console.log(data)
} else {
    console.log('Data not found')
    window.location.href = "index.html"
}

function createVideos(instruments, type) {
    const videosRow = document.getElementById('videos')
    videosRow.innerHTML = "";
    data.videos.forEach(video => {
        console.log(video.instrument)
        console.log(instruments)
        console.log(instruments.includes(video.instrument))
        if (instruments.length==0 || instruments.includes(video.instrument)) {
            if (type == "all" || video.type == type) {
                const videoDiv = document.createElement('div')
                videoDiv.classList.add('col-lg-4', 'col-md-12', 'col-sm-12', 'mb-3', 'mt-2');
                videoDiv.innerHTML = `
                <div class="card" style="border: 0;">
                    <video src="videos/video_${video.id}.mp4" class="card-img-top" alt="video: ${video.title}"></video>
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-top">
                                <h5 class="card-title">${video.title}</h5>
                                <img src="./icons/${video.instrument.toLowerCase()}.svg" height="25">
                            </div>
                            <div class="text-muted d-flex justify-content-between align-items-center">
                                <div style="font-size:small">    
                                    <i class="fas fa-user"></i> ${video.author}
                                </div>
                                <span class="music-type ${video.type}">
                                    ${video.type.toUpperCase()}
                                </span>
                            </div>
                        </div>
                    </div>
                `;
            videosRow.appendChild(videoDiv);
            }
        }
    })
}
createVideos([], "all")

const instruments = ["Voice", "Guitar", "Piano", "Mix"]
const instrumentsCheckBox = document.getElementById('instruments-checkbox')
instruments.forEach(instrument => {
    instrumentsCheckBox.innerHTML += `
        <input class="form-check form-check-input" type="checkbox" id="${instrument}" value="${instrument}" onclick=updateFilters() >
        <label class="form-check form-check-label text-white p-0 pr-4" for="${instrument}">
            <img src="./icons/${instrument.toLowerCase()}_white.svg" height="25">
            ${instrument}
        </label>
    `
})

let selectedInstruments = []
const selectedType = ''

function updateFilters() {
    selectedInstruments = []
    instruments.forEach(instrument => {
        const checkbox = document.getElementById(instrument)
        if (checkbox.checked) {
            selectedInstruments.push(checkbox.value)
        }
    })
    createVideos(selectedInstruments, document.getElementById('music-type').value)
}

function resetFilters() {
    instruments.forEach(instrument => {
        const checkbox = document.getElementById(instrument)
        checkbox.checked = false
    })
    document.getElementById('music-type').value = 'all'
    createVideos([], "all")
}