# Landing Page - Udacity Project 2 
###### completed by Farah Alshammari
------

```
The basic HTML and CSS code was taken from the provided Github repository Udacity has provided. 

I have added some changes to the CSS to make it more personalized and have indicated all changes in the files. 

```


### Project Summary Given by Udacity:

This project aims to give you real-world scenarios of manipulating the DOM. The functionality you will be using serves two purposes: to prepare you for appending dynamically added data to the DOM, and to show you how javascript can improve the usability of an otherwise static site. This project barely touches the surface of what is possible, but it does use some incredibly common events, methods, and logic.

For this project, refactor and test as much as possible while you are building. You should figure for every piece of functionality you add, you will likely spend just as much time testing and refactoring your code. If it takes you 3 hours to figure out the logic, it should likely take you another 3 hours determining that you wrote the best code possible. As your skills improve, this process will feel more natural. Make sure to remove any debugging code from your final submission.

------

### Project Requirements and Parameters: 

1. `Optional` Create a Landing Page from Scratch. Or use the GitHub repository for the given project [x]
2. Dynamic build of the navbar on the page using JavaScript [x]
* All components of the navbar should be solely created by JS
* `Optional` hide the navbar while not scrolling on the page
* Smoothly scroll to the section when section nav link is clicked
3. Change the view of the sections when in view of the window as well as vise versa [x]
* Learn how Intersection Observer works and how to use it to manipulate the sections
4. `Optional` add a Top Button that allows the user to scroll to the Top that shows up after the page fold [x]
5. `Optional` allow for the user to collapse sections [x] 

------

### Changes I Made to the Original CSS Code: 

1. Font-family of the entire HTML file to Helvetica
2. Body background gradient to be from a light purple to a light orange
3. Navbar effects properties [mouse hover and section in view]
4. Created the hide and show classes for the scrolling function
5. What happens when class is in view [changed to a more of a 'card' look]
5. Created the collapse class for sections for the section collapsing functionality 
6. Added the 'Top' button CSS 

------

### My app.js File Set Up: 

* Global Variables for all functions
* Smaller Helper functions that aid in other functions
* navbar building function
* Intersection Observer 
* Window scroll function 
* call/implement functions
