function signup() {
    console.log("yes");
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const user = {
        userName,
        userEmail,
        password,
        confirmPassword
    };

    fetch('http://localhost:5000/signUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            if (response.ok) {
                window.location.href = './dashboard.html';
            }
            else {
                throw new Error('Error signing up');
            }
        })
        .catch(error => {
            console.error('Error signing up:', error);
        });
}

function login() {
    const userEmail = document.getElementById('userEmail').value;
    const password = document.getElementById('password').value;

    const user = {
        userEmail,
        password
    };

    fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            if (response.ok) {
                window.location.href = './dashboard.html';
            }
        })
        .catch(error => {
            console.error('Error logging in:', error);
        });
}

function shortenUrl() {
    const originalURL = document.getElementById('originalURL').value;
    const notes = document.getElementById('notes').value;
    const url = {
        originalURL,
        notes
    };

    fetch('http://localhost:5000/url/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(url)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error shortening URL');
            }
        })
        .then(data => {
            const shortenedUrl = data.shortURL;
            const shortenedUrlDiv = document.getElementById('shortenedurl');
            shortenedUrlDiv.innerHTML = '<h4 id="shorturltext">Shortened URL: ' + shortenedUrl + '</h4> <a href="http://localhost:5000/url/' + shortenedUrl.substring(15) + '">Redirect</a>';
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function searchUrl() {
    const keyword = document.getElementById('search').value;

    fetch('http://localhost:5000/searchURL/' + keyword)
        .then(response => response.json())
        .then(data => {
            data.forEach((obj) => {
                console.log(obj.originalURL);
                var container = document.createElement("div");
                container.classList.add("container3");
                var originalURL = document.createElement("h5");
                originalURL.innerHTML = "Original URL:  " + obj.originalURL + "  " + "<a href=" + `${obj.originalURL}` + `id="link" target="_blank" style="color: green;">Click Me</a>`;

                var shortURL = document.createElement("h5");
                shortURL.innerHTML = "Shortened URL:  " + obj.shortURL + "  " + "<a href=" + `${obj.shortURL}` + `id="link" target="_blank" style="color: green;">Click Me</a>`;

                var notes = document.createElement("h5");
                notes.textContent = `Notes: ${obj.notes}`;

                container.appendChild(originalURL);
                container.appendChild(shortURL);
                container.appendChild(notes);

                document.body.appendChild(container);
            });
        })
        .catch(error => {
            console.log("Error:", error);
        });
}
