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
if ((data.loggedUserType==="Music Companies" || data.loggedUserType==="Event Organizers" || isOnOwnProfile) && user.email !== null){
    document.getElementById('email-section').classList.remove('d-none')
}


function createVideos() {
    document.getElementById('profile-content-title').innerText = "My Portfolio"
    const videosRow = document.getElementById('videos')
    videosRow.classList.remove('d-none')
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

function createEvents() {
    document.getElementById('profile-content-title').innerText = "My Events"
    const eventsRow = document.getElementById('events')
    eventsRow.classList.remove('d-none')
    eventsRow.innerHTML = "";
    data.events.forEach((event, index) => {
        if (event.organizer === user.name) {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('col-lg-6', 'col-md-12', 'col-sm-12', 'mb-3', 'mt-3');
            
            let interestedInfo = '';
            if (event.interested) {
                interestedInfo = `
                    <i class="fas fa-users"></i> ${event.interested.length} interested
                    <button onclick='openModalForEvent(${JSON.stringify(event.interested)})' class="btn btn-outline-primary"><i class="fas fa-eye"></i></button>
                `;
            }
            eventDiv.innerHTML = `
                <div class="card border-0" style="height:30vh; object-fit:cover">
                    <div class="row g-0">
                        <div class="col-4">
                            <img src="./images/events/${index + 1}.png" alt="event: ${index + 1}" class="img-fluid" style="height:30vh; object-fit:cover">
                        </div>
                        <div class="col-8">
                            <div class="card-body">
                                <h6 class="card-title">${event.title}</h6>
                                <p class="card-text text-muted" style="font-size:small">${event.description}</p>
                                <div class="row">
                                    <div class="col-12">
                                        <i class="fas fa-calendar"></i> ${event.date}<br/>
                                    </div>
                                    <div class="col-12">
                                        ${interestedInfo}
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            eventsRow.appendChild(eventDiv);
        }
    });
}

if (user.user_type === "Musicians") createVideos();
if (user.user_type === "Event Organizers") createEvents();

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

function openModalForEvent(interestedPeople) {
    const modalBody = document.querySelector('#eventModal .modal-body');
    modalBody.innerHTML = createInterestedTable(interestedPeople);
    $('#eventModal').modal('show');
}

function createInterestedTable(interestedPeople) {
    let tableContent = `
        <table class="table table-striped bg-white m-0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Profile Link</th>
                </tr>
            </thead>
            <tbody>
    `;

    interestedPeople.forEach(person => {
        console.log(person)
        tableContent += `
            <tr>
                <td>${person}</td>
                <td><a href="profile.html?${person}">View Profile</a></td>
            </tr>
        `;
    });

    tableContent += `
            </tbody>
        </table>
    `;

    return tableContent;
}
