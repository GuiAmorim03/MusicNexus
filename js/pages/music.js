data = JSON.parse(localStorage.getItem('musicNexus'))
if (!data) {
    window.location.href = "index.html"
}

function createVideos(instruments, type) {
    const videosRow = document.getElementById('videos')
    videosRow.innerHTML = "";
    data.videos.forEach(video => {
        if (instruments.length === 0 || instruments.includes(video.instrument)) {
            if (type === "all" || video.type === type) {
                const videoDiv = document.createElement('div');
                videoDiv.classList.add('col-lg-4', 'col-md-12', 'col-sm-12', 'mb-3', 'mt-2');
                const hasPermissionToWatchTheVideo = video.protected && (data.loggedUserType === "Music Fans" || data.loggedUserType === "Musicians")

                let videoCardContent = `
                    <video src="videos/video_${video.id}.mp4" class="card-img-top" alt="video: ${video.title}" style="filter: grayscale(${hasPermissionToWatchTheVideo ? 100 : 0}%);"></video>
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
                `;

                
                if (hasPermissionToWatchTheVideo) {
                    videoCardContent += `
                        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); display: flex; justify-content: top; align-items: center; flex-direction: column; color: white; text-align: center; padding: 1em;">
                            <i class="fas fa-lock" style="font-size: 2em; margin-bottom: 0.5em;"></i>
                            <p style="margin: 0;">Log in as an <i>Event Organizer</i> or a <i>Music Company</i> to watch this protected content</p>
                        </div>
                    `;
                }

                videoDiv.innerHTML = `
                    <div class="card" style="border: 0; position: relative; ${hasPermissionToWatchTheVideo ? '' : 'cursor:pointer'}" ${hasPermissionToWatchTheVideo ? '' : `onclick='openModal("videos/video_${video.id}.mp4", "${video.title}", "${video.author}", "${video.stars}")'`}>
                        ${videoCardContent}
                    </div>
                `;

                videosRow.appendChild(videoDiv);
            }
        }
    });
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


function openModal(videoSrc, videoTitle, videoAuthor, videoStars) {
    const modalVideoSource = document.getElementById('modalVideoSource');
    modalVideoSource.src = videoSrc;
    const modalVideo = document.getElementById('modalVideo');
    modalVideo.load();
    document.getElementById('videoModalLabel').innerText = videoTitle;
    document.getElementById('star-number').innerText = videoStars;
    $('#videoModal').modal('show');
    $('#star-logo').removeClass('fas fa-star');
    $('#star-logo').addClass('far fa-star');
    document.getElementById('profile-link').href = "profile.html?" + videoAuthor;
    document.getElementById('profile-link').innerText = "More About " + videoAuthor;
};

function updateStar() {
    const stars = parseInt(document.getElementById('star-number').innerText);
    document.getElementById('star-number').innerText = stars + 1;
    $('#star-logo').removeClass('far fa-star');
    $('#star-logo').addClass('fas fa-star');
}
