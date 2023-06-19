
# URL Shortener | ACM Open Projects'23

The URL Shortener project aims to provide a service that takes long URLs and converts them into shorter, more manageable links. The shortened links can be easily shared and accessed, saving users from dealing with lengthy URLs.


## Demo


## Tech Stacks 🚀

**Client:** HTML, CSS, JS

**Server:** Node, Express

**Database:** MongoDB

## Run Locally

Clone the project

```bash
  git clone https://github.com/ArshDawra/URL-Shortener.git

```

Go to the project directory

```bash
  cd URL-Shortener
```

Install dependencies in server directory

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_LINK` MongoDB Atlas Connection String



## Features

- Authentication
- URL Shortener
- Save URLs along with Notes or Description
- Search Functionality (Search desired URL information)
- Keeps track of number of visits/clicks on a site using the shortURL



## Internal Working
The internal working of a URL shortener with authentication, frontend in HTML/CSS, and backend in Node.js with Express is as follows:

Sign Up Process:
   - The user visits the URL shortener website and lands on the signup page.
   - The user enters their username, user email, password, and confirm password.
   - When the user clicks the signup button, a Fetch POST request is sent to the backend.
   - The backend receives the request and checks if the password and confirm password fields match.
   - If they match, the backend hashes the password using bcrypt for security.
   - The user data, including the hashed password, is stored in MongoDB.

Sign In Process:
   - If the user already has an account, they can navigate to the signin page.
   - The user enters their user email and password.
   - When the user clicks the signin button, a Fetch POST request is sent to the backend.
   - The backend checks if the user with the provided user email exists in the database.
   - If the user exists, the backend compares the hashed password stored in the database with the provided password using bcrypt.
   - If the passwords match, the user is considered authenticated, and a session is issued.

Dashboard and URL Shortening:
   - After successful authentication, the user is redirected to the dashboard page.
   - The dashboard page allows the user to enter the long URL they want to shorten.
   - The user enters the long URL and any additional notes.
   - When the user clicks the shorten button, a Fetch POST request is sent to the backend.
   - The backend receives the request and generates a unique short code for the long URL, using a library shortid.
   - The backend stores the original URL, short url, and accompanying notes in the database, along with the timestamp of creation.

Redirection and Search Functionality:
   - When a user clicks on a shortened URL, the frontend captures the short code and increments the number of visits/clicks on that particular site.
   - The frontend sends a Fetch GET request to the backend with the short code.
   - The backend retrieves the original URL associated with the short code from the database.
   - The backend redirects the user to the original URL, which brings them to the desired destination.

Search Functionality:
   - The frontend provides a search input field where the user can enter a keyword.
   - When the user submits the search query, a Fetch request is sent to the backend.
   - The backend searches the database for any records where the keyword matches the notes, original URL, or short URL fields.
   - The backend returns the search results as a response to the frontend.
   - The frontend displays the search results, including the original URL, short URL, accompanying notes, and number of clicks on that site.

Throughout the process, the frontend provides a responsive and user-friendly interface, while the backend handles the authentication, URL shortening, data storage, search functionality, and redirection.


## Lessons Learned

Key takeaways include implementing user registration and login, securing user passwords with bcrypt, interacting with MongoDB, handling frontend and backend communication using Fetch, creating a responsive frontend, generating unique short codes for URLs, storing and retrieving data from the database, and implementing search functionality. The project enhanced skills in full-stack development, security, error handling, database management, and user experience optimization.


## Resources Used

 - [Node.js Documentation](https://nodejs.org/en/docs)
 - [Express.js Documentation](https://expressjs.com/)
 - [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)
 - [Mongoose Documentation](https://mongoosejs.com/docs/)



