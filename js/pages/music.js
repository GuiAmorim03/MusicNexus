data = JSON.parse(localStorage.getItem('musicNexus'))

const videosRow = document.getElementById('videos')
data.videos.forEach(video => {
    const videoDiv = document.createElement('div')
    videoDiv.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'mb-3', 'mt-2');
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
})
