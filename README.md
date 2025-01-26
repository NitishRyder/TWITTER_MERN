# Twitter Clone

This is a Twitter Clone project built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The project replicates key features of Twitter, including user authentication, tweeting, and a dynamic feed.

## Features

- **User Authentication**: Secure login and registration system.
- **Tweet Functionality**: Create, edit, and delete tweets.
- **Feed**: A dynamic timeline displaying tweets from users.
- **Likes and Retweets**: Engage with tweets.
- **User Profiles**: View and manage user details and tweets.
- **Real-time Updates**: Live feed using WebSockets (optional).

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Tools**: Axios, JSON Web Tokens (JWT), bcrypt.js, and Git for version control.

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB instance running
- Git installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/twitter-clone.git
   cd twitter-clone

   ```

2. Install Dependencies:

   ```bash
   cd backend
   npm install

   ```

3. Create a .env file for the backend with the following variables:

    ```bash
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key

    ```
4. Start the development servers:

    Backend:

    ```bash
    cd ./backend
    npm run dev

    ```
    
    Frontend:

    ```bash
    cd ./frontend
    npm run dev

    ```

5. Open the app in your browser at http://localhost:3000.

## Folder Structure

```bash
twitter-clone/
├── backend/ # Node.js and Express.js server
├── frontend/ # React.js frontend
└── README.md # Project documentation
```
