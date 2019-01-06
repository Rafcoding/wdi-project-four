# P4: Play & Watch

# Summary

This app is an e-commerce website that sells both video games and movies. Play & Watch is a full stack application which has all the basic functions of an e-commerce website such as placing orders, keeping track of orders through purchase history, product basket e.t.c. This web app is also capable of showing users suggested products based on the genre of their previous purchases.

Play & Watch was the final project of the GA Immersive course and it was also a group project. Our main objective was to use React to build the front-end and our timeframe for completion was one week. I was looking forward to using React so I found this project particularly interesting.

Web Site Heroku. GitHub Repo.

# Brief

* Build a full-stack application by making your own backend and your own frontend

* Use an Express API to serve your data from a Mongo database

* Consume your API with a separate frontend built with React

* Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models

* Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut

* Be deployed online so it's publicly accessible.

* Have automated tests for at least one RESTful resource on the backend, and at least one classical and one functional component on the frontend.

# Technologies Used


* React
* JavaScript (ES6)
* HTML5
* SCSS
* Bulma CSS Framework
* Git
* GitHub
* bcrypt
* mongoose
* Heroku
* Trello
* Yarn
* Chai
* Mocha

# Approach taken


This project was open to individual and group work, we had free-roam on what app to build, as long as we stuck to the brief. My main criteria for this project was to work in a team and on a project that had a simple MVP, but could be expanded on with many extra features.

I joined Sham and Femi from my class and we began by planning our models and what we should include in the MVP. Brainstormed ideas and possible features to add, what would be difficult and what would be impossible to achieve within the timeframe.

# Trello


# Screenshots

![index page](src/assets/images/index.png)

![index page](src/assets/images/index2.png)

![show page](src/assets/images/show.png)

![show page](src/assets/images/show2.png)

![basket page](src/assets/images/basket.png)

![purchases page](src/assets/images/purchasehistory.png)

# Bugs

Below is a list of some of the known bugs within the app:

* iFrame - if the iFrame is given an incorrect YouTube url, the show page won't render correctly, duplicating itself within the frame. If I had more time, I would have the input accept only the unique video ID, where the rest of the link is hardcoded.
* Search bar - when a search term is deleted partially, the state doesn't update until the search term is cleared completely.
* Rating stars - if a rating has been made, the stars don't reset if the show page is changed to another product. This is due to the ratings component being a classical component and as a result it doesn't update when the props change. I'd remedy this by adding a componentDidUpdate block to check for changes.

# Wins and Blockers

It has been the most structured, organised and mature project of the 4.

# Future Content

* Along with fixing the known bugs, there are a number of potential future features I could implement, such as:

* Incorporating a payment gateway that accepts credit card or Paypal.
* Adding an extra product for music.
* Allowing user to sort index page.
* Ability to remove specific genres from suggestions.
* Show top 5 suggestions on the index page within the image slider.
* Rewriting the suggestions based on relevance score - products of higher relevance will be shown first.
* Customer support chat.
* Stock management.
* And much more!
