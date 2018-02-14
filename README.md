# Star Wars App

A simple viewer app for the Star Wars API. Comes with a basic UI which displays information of a character with a click of a button. All information has been optained with a PHP script which connects to the API and passes the response to the Front End.

## Installation

Clone the repository

    git clone <this_repo_link>

Copy the "star-wars-api" directory to your php server web folder. The ".htaccess" file is included to enable CORS when using ReactJS
Example: For LAMPP users

    /opt/lampp/htdocs

In your terminal, cd to the Star Wars App directory and run:

    npm install
To start the Webpack Server to host the UI in localhost:4000, run:

    npm start

Start your Apache server, which will run in localhost:80

## Challenges

Due to my limited knowledge in PHP, I came across a lot of errors when trying to install lumen on my PC, so I was unable to use the framework.

## Technology Used

 - ReactJS
 - Webpack
 - Bootstrap
 - PHP
