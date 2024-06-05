document.addEventListener('DOMContentLoaded', function() {
    const data = JSON.parse(localStorage.getItem('musicNexus'));
    const navbar = document.getElementById('navbar');

    let profileLink = `<div class="text-light" href="profile.html">Welcome, ${data.loggedUser}</div>`;
    if (data.loggedUserType !== "Music Fans") {
        profileLink = `<a class="text-light" href="profile.html">Welcome, ${data.loggedUser}</a>`;
    }

    navbar.innerHTML= `
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark" style="background-color: rgba(0, 0, 0, .25)">
            <a class="navbar-brand" href="index.html">
                <img src="images/utils/logo_white.png" height="40">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Music</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Events</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    ${profileLink}
                </form>
            </div>
        </nav>
    `;
});
