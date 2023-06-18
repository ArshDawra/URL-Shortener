
function signup() {
    console.log("yes");
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;
    console.log(name);

    const user = {
        name,
        email,
        password,
        confirmpassword
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
                window.location.href = '/dashboard.html';
            } else {
                throw new Error('Error signing up');
            }
        })
        .catch(error => {
            console.error('Error signing up:', error);
        });

}

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
        email,
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
                window.location.href = '/dashboard.html';
            } else {
                throw new Error('Error logging in');
            }
        })
        .catch(error => {
            console.error('Error logging in:', error);
        });
}

function shortenUrl() {
    const originalUrl = document.getElementById('originalurl').value;
    const notes = document.getElementById('note').value;
    const url = {
        originalUrl,
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
            shortenedUrlDiv.textContent = `Shortened URL: http://localhost:5000/url/:${shortenedUrl}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
