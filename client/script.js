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
            //console.log(shortenedUrl);
            shortenedUrlDiv.textContent = `Shortened URL: ${shortenedUrl}`;
            const redirectbtn = document.getElementById('redirect');
            redirectbtn.style.display = "block";
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function redirectURL() {
    console.log("hey");
    const shortURL = document.getElementById('shortenedurl').textContent;
    console.log(encodeURIComponent(shortURL));

    fetch(`http://localhost:5000/redirect/${encodeURIComponent(shortURL)}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else if (response.status === 404) {
                throw new Error('URL not found');
            } else {
                throw new Error('Internal server error');
            }
        })
        .then(data => {
            console.log(data.originalURL);
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function searchUrl() {

}
