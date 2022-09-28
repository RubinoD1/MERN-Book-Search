# MERN: Book Search Engine

GitHub Repository: https://github.com/RubinoD1/MERN-Book-Search

Live Page: https://pure-river-39227.herokuapp.com/ 

## Introduction 

This is a MERN book search application that allows users to search for books using the Google Books API. Functionality of this app includes:

- The ability to make a user account / login using email and password credentials. 
- The ability to search for books
- Logged in users have the extra functionality of being able to save / remove items from a saved book list. 

## User Story

```
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Pseudocode 

1) When I load the search engine, I am  presented with a menu with these options:
- Search for books 
- Login/ signup 
- input option to search for books and a submit button 

2) When I click the Search for Books menu option: 

THEN I am presented with an input field to search for books and a submit button

3) WHEN I am not logged in and enter a search term in the input field and click the submit button

THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site

4) WHEN I click on the Login/Signup menu option

THEN a modal appears on the screen with a toggle between the option to log in or sign up

5) WHEN the toggle is set to Signup

THEN I am presented with three inputs for a username, an email address, and a password, and a signup button

6) WHEN the toggle is set to Login

THEN I am presented with two inputs for an email address and a password and login button

7) WHEN I enter a valid email address and create a password and click on the signup button

THEN my user account is created and I am logged in to the site

8) WHEN I enter my account’s email address and password and click on the login button

THEN the modal closes and I am logged in to the site

9) WHEN I am logged in to the site

THEN the menu options change to Search for Books, an option to see my saved books, and Logout

10) WHEN I am logged in and enter a search term in the input field and click the submit button

THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account

11) WHEN I click on the Save button on a book

THEN that book’s information is saved to my account

12) WHEN I click on the option to see my saved books

THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account

13) WHEN I click on the Remove button on a book

THEN that book is deleted from my saved books list

14) WHEN I click on the Logout button

THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button


## Screenshots 

![Homepage](/images/homepage.png)

![Search](/images/search.png)

![Saved Books](/images/saved%20book.png)