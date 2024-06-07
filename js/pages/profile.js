data = JSON.parse(localStorage.getItem('musicNexus'))
let users;
if (data) {
    users = data.users
} else {
    console.log('Data not found')
    window.location.href = "index.html"
}


let profileToSearch = decodeURIComponent(window.location.search.split('?')[1])

let user;

let isOnOwnProfile = false
if (profileToSearch === 'undefined') {
    profileToSearch = data.loggedUser
    isOnOwnProfile = true
}

user = users.find(user => user.name == profileToSearch)
console.log(user)

document.getElementById('user-photo').src=`./images/users/${user.name}.png`;
document.getElementById('user-name').innerText=user.name;
document.getElementById('user-bio').innerText=user.description;
document.getElementById('user-email').innerText=user.email
document.getElementById('user-email').href=`mailto:${user.email}`;
document.getElementById('user-phone').innerText=user.phone;
document.getElementById('user-phone').href=`tel:${user.phone}`;
console.log(user.email)
if ((data.loggedUserType==="Music Companies" || data.loggedUserType==="Event Organizers" || isOnOwnProfile) && user.email !== null){
    document.getElementById('email-section').classList.remove('d-none')
}


function createVideos() {
    const videosRow = document.getElementById('videos')
    videosRow.innerHTML = "";
    data.videos.forEach(video => {
        if (video.author === user.name){
            const videoDiv = document.createElement('div')
            videoDiv.classList.add('col-lg-6', 'col-md-12', 'col-sm-12', 'mb-3');
            videoDiv.innerHTML = `
                <div class="card" style="border: 0; cursor:pointer" onclick='openModal("videos/video_${video.id}.mp4", "${video.title}", "${video.author}", "${video.stars}")'>
                    <video src="videos/video_${video.id}.mp4" class="card-img-top" alt="video: ${video.title}"></video>
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-top">
                                <h5 class="card-title">${video.title}</h5>
                                <img src="./icons/${video.instrument.toLowerCase()}.svg" height="25">
                            </div>
                            <div class="text-muted d-flex justify-content-between align-items-center">
                                <span class="music-type ${video.type}">
                                    ${video.type.toUpperCase()}
                                </span>
                            </div>
                        </div>
                    </div>
                `;
            videosRow.appendChild(videoDiv);
        }
    })
}
createVideos()

function openModal(videoSrc, videoTitle, videoAuthor, videoStars) {
    const modalVideoSource = document.getElementById('modalVideoSource');
    modalVideoSource.src = videoSrc;
    const modalVideo = document.getElementById('modalVideo');
    modalVideo.load();
    $('#videoModal').modal('show');
};

function updateStar() {
    const stars = parseInt(document.getElementById('star-number').innerText);
    document.getElementById('star-number').innerText = stars + 1;
    $('#star-logo').removeClass('far fa-star');
    $('#star-logo').addClass('fas fa-star');
}

