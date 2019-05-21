# Todo list exercise

### Install

- Install https://nodejs.org/en/
- Download archive from link provided
- Unzip file and cd into it
- run `npm install`

### Run
`node app.js`

Visit http://localhost:8080 in your browser

### High level application requirements
1. Multiple users should be able to view the shared public todo list
2. Should be able to add items
3. Should be able to delete items
4. Should be able to edit items (Missing feature)
5. Must be able to deploy in docker (Missing feature)

### Tasks
1. Add missing requirement #4 to the application
2. Add sufficient test coverage to the application and update readme on howto run the tests
3. Add missing requirement #5 to the application (Dockerfile and update readme with instructions)

### Bonus
4. Display test coverage after tests are executed
5. Find and fix the XSS vulnerability in the application. Also make sure that it wont happen again by including a test.

> ### Notes

Task 1 - Added a edit function in the todo list in order to edit tasks in the todo list.

Task 2 - Added tests in ./test/test.js for viewing, editing and deleting items.

Task 3 - Added Dockerfile to repo.

Commands used: 

```
docker build -t mytodolist-app .

docker run -it -d <image_id>

#I used this as a test to make sure that what was stated in my Dockerfile was actually being performed in my container.
docker exec -it <container_id> bash
```

Task 4 - Please see the below for displayed execution of test coverage.

Task 5 - I unfortunately cannot find the vulnerability. I would need more time on this step.

> - Will be nice if you can git tag the tasks by number

### Solution

Task 1 - I created an edit button on the web app which allows you to edit all of the tasks in your todo list in a table form. Once you have edited the task successfully, you can click save and then click back and you will be back at the todo list on your main page.

1.1. Created a post to a new route /todo/edit/ with the todolist variable passed to the request body item property. I then created a edit.js file and rendered the template file.

1.2. Logged console output to form part of debugging

1.3. In the todo.ejs file. I added a form for /todo/edit as a post and created a function to list the todo index. I hid the input type so that it would not be able to be manipulated by users and you could only see the submit and edit button.

I then added the /todo/edit function in edit.ejs with the text type and the item property so that the user could edit the todo list item that they required and added the back and save button to save the edited item and return back to the homepage /todo.

Task 2 - Used chai and mocha for unit testing of our existing application.

Here is the test coverage below (As you can see, you can run "mocha" in the base of the project in order to preform the tests:

The below is for Task 4.
```
SA-MAC-02:Technical-Challenge_entersekt nicholas.green$ mocha

  List /todo items
    ✓ List items /todo

  Add item /todo/add
TODO view
    ✓ Add test item /todo/add

  Delete item /todo
    ✓ Delete test item
(node:45684) [DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated


  3 passing (36ms)
```
