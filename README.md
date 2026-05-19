# Set Up
## Development environment
-Vite was used as the development environment for this project
-To create a vite project:1. Run the command in the terminal : npm create vite@latest 
                          2. Name the vite project with a custom name of your choice
                          3. Select React as the framework
                          4. Select Javascript as the Variant
                          5. Select Yes to install with npm and start the project
## Backend Server
-JSON server was used to simulate the database in the backend
-To set up a JSON server: 1. Run the command in a separate terminal: npm install json-server --save-dev 
                          2. Create a db.json file in your project folder
                          3. Add sample data to the db.json file in the following sample format 
                             {
                                "posts": [
                                            { "id": 1, "title": "First Post" },
                                            { "id": 2, "title": "Second Post" }
                                         ],
                                "comments": [
                                               { "id": 1, "body": "Great post!", "postId": 1 }
                                            ]
                            }
                          4. Start the server by running the command : npx json-server --watch db.json in the terminal
## Frontend styling
-Bootstrap css was utilized in styling the HTML elements in this project
-To set up bootstrap: 1. Run the following command in the terminal: npm install bootstrap @popperjs/core
                      2. Add the following line in the head element of index.html     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">

