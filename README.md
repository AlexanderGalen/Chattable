# Chattable Messenger

## Technologies Used
* Node JS
* Express
* npm
* SQL
* Socket io
* sequelize
* handlebar
* heroku
* Auth
* Time Stamp
* dotenv
* Boot Strap

## Description
* Simple messenger application for instant messaging between registered users
* Users are promted to log in or sign up upon entering the site.
* Users can initiate a new chat with any other existing user
* To create the channel with the other user, you just need to click on the user's card on the main portion of the homescreen labeled "Start a chat with:"
* The new channel will be added to the list of existing channels (if any) on the left hand side of the page labeled "My Chats"
* When you enter a channel, any previous chat history will be loaded and displayed.
* Sent messages will be displayed on the right side with a green card header
* Recieved messages will be displayed on the left side with a purple card header
* Messages will in a timestamp of when the message was sent/recieved.
* You can choose either a light theme or dark theme via a toggle in the top right corner
* If you want to log out, you can click the log out option on the top right corner

## Setup/Installation
Just clone the repo:
```
git clone https://github.com/AlexanderGalen/Chattable.git
```
cd into the cloned directory, then run npm install
```
cd Chattable
npm install
```
Install and make a user account for local MySQL development:

Login to mysql on the command line and create a new database for the app to use. I use "chat_db".

Create an .env file containing database login credientials in the following format: (make sure to exclude this .env file in your .gitignore so you don't publish your username and password for all to see!)

```
DB_NAME="databaseName"
DB_USER="username"
DB_PASSWORD="password"
```
Now you can run the development version of the site. Running ```npm start```  will set up the database tables and start a development server listening on localhost:3001. To observe the instant messaging locally, you can create an account and log in, then open a private browser window, create a new account, then initate a chat between these users. If both windows have the chat open, messages sent from one to the other will display instantly in the other browser window. 


## License
MIT<br>

## Team Members
* Alexander Carr
* Qi Chen
* Ryan Dao
* Joon Park
* Brain Zoulko 

https://chat.alexandergalen.com/<br>
![example-chat](screenshot.jpg)
https://github.com/AlexanderGalen/Chattable
