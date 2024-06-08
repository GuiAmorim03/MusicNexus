data = JSON.parse(localStorage.getItem('musicNexus'))
if (!data) {
    window.location.href = "index.html"
}


function updateSelector(event) {
    const selectedID = event.srcElement.id
    document.getElementById('selector-looking').classList.remove('bg-white')
    document.getElementById('selector-workshop').classList.remove('bg-white')
    document.getElementById(selectedID).classList.add('bg-white')
    createEvents(selectedID.split('-')[1].toUpperCase())
}

function createEvents(type) {
    let classButtonInterest = 'd-none'
    if ((data.loggedUserType === "Musicians") && (type === "LOOKING")) {
        classButtonInterest = ''
    }
    const eventsRow = document.getElementById('events')
    eventsRow.innerHTML = "";
    data.events.forEach((event, index) => {
        if (event.type === type) {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('col-lg-6', 'col-md-12', 'col-sm-12', 'mb-3', 'mt-3');
            eventDiv.innerHTML = `
                <div class="card border-0" style="height:30vh; object-fit:cover">
                    <div class="row g-0">
                        <div class="col-4">
                            <img src="./images/events/${index + 1}.png" alt="event: ${index + 1}" class="img-fluid" style="height:30vh; object-fit:cover">
                        </div>
                        <div class="col-8">
                            <div class="card-body">
                                <h5 class="card-title">${event.title}</h5>
                                <p class="card-text text-muted">${event.description}</p>
                                <div class="row">
                                    <div class="col-7">
                                        <i class="fas fa-calendar"></i> ${event.date}<br/>
                                        <i class="fas fa-users"></i> ${event.organizer}<br/>
                                        <i class="fas fa-link"></i> <a href="${event.link}" target="_blank" >${event.link}</a><br/>
                                    </div>
                                    <div class="col-5 ${classButtonInterest}" id="button-demonstrate-interest">
                                        <button class="btn btn-primary" style="margin-left:-15px" onclick="alert('${data.loggedUser} showed interest on ${event.title}')">I'm interested</button>
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
createEvents("LOOKING")
