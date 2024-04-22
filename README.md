# Dream Capture

Dream Capture is a web application designed to help users capture and visualize their dreams quickly and easily. With three main features, it aims to streamline the process of recording and recalling dreams:

  1.Voice-to-Text Recording: Users can record their dreams using voice-to-text technology, allowing them to quickly transcribe their dream descriptions without the need for typing.
  
  2.AI-Powered Dream Editing: The application utilizes AI to analyze and organize the dream description, helping users refine and clarify their recollection. This feature assists users in capturing the essence of their dreams more accurately.
  
  3.Image Generation: Dream Capture generates images based on the user's dream description, providing visual representations to enhance their memory and understanding of the dream. This feature aids users in visualizing their dreams and preserving them for future reference.

Dream Capture prioritizes speed and ease of use, allowing users to capture their dreams before the details fade from memory. It addresses the frustrations of users like Jun, who seek a better solution for recording and interpreting their dreams to unlock their creative potential. With Dream Capture, users can seamlessly document their dreams and explore their imaginative landscapes with clarity and efficiency.

![Home](https://github.com/luismolinuevo/Dream-Capture/assets/89353175/93240b78-4e7d-4890-b9a5-a0f9f10a5c81)

## Built With

- React.js
- MUI
- Tailwind CSS
- Express JS
- DAll_E 3 OPEN AI
- MongoDB

# Getting Started

Im going to show you how to run the project locally on your computer.

## Prerequisites

You need to have the node runtime installed on your computer. You also need to have a OPENAI account for DALL-E 3(Your account needs to have money on it since the API calls cost money). You also need a MongoDB account since that is what is being used for the database.

[How to install node](https://kinsta.com/blog/how-to-install-node-js/)
[More information about DAll-E 3](https://openai.com/dall-e-3)
[How to setup with MongoDB](https://www.mongodb.com/basics/mongodb-connection-string#:~:text=How%20to%20get%20your%20MongoDB,connection%20string%20for%20your%20cluster.)

## Installation

### Step 1: Clone the repo to your local machine

```
git clone https://github.com/your_username_/Project-Name.git
```

### Step 2: Install Server Dependices
Make sure you are in server directory when you are doing this

```
cd server
npm install
```

### Step 3: Put environment variables needed
Create a .env file in server directory and put variables needed

```
touch .env
```

You only need two variables in .env file. One for OpenAI key and one for MongoDB DB

```
OPENAI_API_KEY = "open ai key"
DB_URL = "mongodb db url"
```

### Step 4: Run the server

```
npm start

or

node server.js
```

### Step 5: Install dependices in client
Make sure you are in the client directory

```
cd client
npm install
```

### Step 6: Put environment variables needed
Create a .env file in client directory and put variables needed. The only the variable needed is the API url

```
touch .env
```

In .env put VITE_PUBLIC_BACKEND_URL = "server url". The defualt is VITE_PUBLIC_BACKEND_URL = "http://localhost:3002"

```
VITE_PUBLIC_BACKEND_URL = "http://localhost:3002"
```

### Step 7: Run your client

```
npm run dev
```

### Step 8: Enjoy

# Future Plans
The inital code and idea was created in a hackathon so there is still alot to do!!!

- Generate multiple image options for the user to choose from. Right now its a single image
- Edit the granular details in the images using voice command
- Reminder to review and edit the dream entry at a later time during the day
- Design a logo and branding for the app
- Create a mobile app prototype
- Clean up code


# More Information
![image](https://github.com/luismolinuevo/Dream-Capture/assets/89353175/46d01e23-671d-4a1c-9592-257d507ed95b)
![image](https://github.com/luismolinuevo/Dream-Capture/assets/89353175/1b0ef6be-b1a4-40fc-aebf-8f17408e4eaf)
[Power Point with more info](https://docs.google.com/presentation/d/1OjOJD7rSrLZMMf8UQG_lj9Ylwnwwn1C4xnL5v8SU8Eo/edit?usp=sharing)

# Contact

Email: luismolinuevo0@gmail.com





