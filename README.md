# Project 01 Retrospective and Overview

[Video Walkthrough](https://youtu.be/G1b-gX7NnjQ)  
[GitHub Repository](https://github.com/Jashan66/438-group7)

## **Overview**

This Weather App was developed with the intention of using the Weatherstack API to provide users with up-to-date weather information. Although the API integration was not fully functional in the final version, the app’s core structure was built to support the display of weather information based on user input. The design is responsive, offering a consistent experience across different screen sizes and devices. While the feature to save favorite cities was not implemented, the project laid a solid foundation for future work in this area. 

We referred to [this guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) for styling this document.

## **Introduction**

- **How was communication managed?**  
  Communication for the project was managed through a Slack group chat.

- **How many stories/issues were initially considered?**  
  A total of 19 stories/issues were initially considered.

- **How many stories/issues were completed?**  
  14 stories/issues were completed.

## **Team Retrospective**

### **Taimur Hasan**

- [My Pull Requests](https://github.com/Jashan66/438-group7/pulls?q=is%3Apr+author%3A%40me+is%3Aclosed)
- [My Issues](https://github.com/Jashan66/438-group7/issues?q=is%3Aissue+is%3Aclosed+assignee%3Atshasan)

- **What was your role, and which stories did you work on?**  
  On this project, I worked on the core front-end experience and testing. I created the UI elements for the Home Page and the Favorites screen. Additionally, I developed dynamic components to display weather information and refactored the codebase to be more efficient. Comprehensive tests were written for each component, all of which passed successfully.

- **What was the biggest challenge?**  
  The biggest challenge was navigating Expo's documentation after their upgrade to SDK 51, which introduced breaking changes.

- **Why was it a challenge?**  
  The challenge arose because the upgrade made much of the existing React Native Expo documentation obsolete, requiring careful study of the new SDK 51 and Expo Router documentation.

- **How was the challenge addressed?**  
  I addressed this challenge by thoroughly reading the updated documentation and researching similar public GitHub projects using these technologies for guidance.

- **Favorite/most interesting part of the project?**  
  The most interesting part of the project was implementing dynamic routing through the Expo Router and setting up the app structure to support it.

- **If you could do it over, what would you change?**  
  I would choose a different API, as the free tier of the Weatherstack API limits requests, making it difficult to test the app extensively. I would also invest more time in setting up the core configuration files at the start.

- **What is the most valuable thing you learned?**  
  The most valuable lesson was the importance of examining similar projects early in the development process to better understand how to implement complex features like routing.


  ### *Jashandeep Rahal*

- [My Pull Requests](https://github.com/Jashan66/438-group7/pulls?q=is%3Apr+is%3Aclosed+author%3AJashan66)
- [My Issues](https://github.com/Jashan66/438-group7/issues?q=is%3Aissue+is%3Aclosed+assignee%3AJashan66)

- **What was your role, and which stories did you work on?**  
  On this project, I worked on the database and backend functionality of the application. I implemented the functionality for user login. This included creating an account, logging in, logging out, and deleting an account. Additionally, I added sessions to ensure that users could save their current session without having to log back in, and thier information was stored specifically for them. Finally, I added error handling and form validation to ensure a smooth UX.

- **What was the biggest challenge?**  
  The biggest challenge was implementing sessions. This is something I haven't done with React Native before, so it took a bit of time to get used to.

- **Why was it a challenge?**  
  It was a challenge because there were new ways to implement sessions using the typescript and expo versions of our application. Reading through documentation was helpful, but other online forums made it worse when trying to decide how to implement it.

- **How was the challenge addressed?**  
  I addressed this challenge by reading the documentation for the correct version of our application and understanding how sessions should be saved and checked in each page.

- **Favorite/most interesting part of the project?**  
  The most interesting part of the project was implementing sessions. Although it was a challenge, it was also satifsying to see the users information populate on the home page even after closing and returning to the application.

- **If you could do it over, what would you change?**  
  I would spend more time to understand what components we needed to make the application and maybe plan out my issues better to be more organized.

- **What is the most valuable thing you learned?**  
  The most valuable lesson I learned was how to work in a team, and also how to properly read documentation to help with implementing features like the db using SQLite, which I have never used before.

  ### *Oscar Barroso*

- [My Pull Requests](https://github.com/Jashan66/438-group7/pull/51)
- [My Issues]([https://github.com/Jashan66/438-group7/issues?q=is%3Aissue+is%3Aclosed+assignee%3AJashan66](https://github.com/Jashan66/438-group7/issues/4))

- **What was your role, and which stories did you work on?**  
  I worked with the API getting the API to work with all the information that we were using.

- **What was the biggest challenge?**  
  The biggest challenge was implementing an API with 250 uses and consistently testing the API key.

- **Why was it a challenge?**  
  It was a challenge because Each key press within our API it would update the location of the search bar to use up the API, at first I used up 3 API keys before I realized that it was doing that.

- **How was the challenge addressed?**  
  It was addressed by changing the way it reads the API, instead of dynamically I added a small delay for 3 seconds when the user stopped typing then it would update.  Another method was to change the Search box and only go until someone pushes enter.

- **Favorite/most interesting part of the project?**  
  The most interesting part was getting the API to work because that way we were able to finally do some testing with our project.

- **If you could do it over, what would you change?**  
  If I could do over something it would definetely be starting as early as possible in order to get most of the small issues done, then just work on the big issues as a group.

- **What is the most valuable thing you learned?**  
  The most valuable thing I learned was learning how to use Github in general as all the classes I took so far has not used github until now.  At least most commands I used in Github was push and commit.  So far it helped me memorize how to clone, make a new branch, pull, and even do pull requests.

## **Conclusion**

- **How successful was the project?**  
The project was successful in delivering a well-designed, responsive front-end, and we successfully integrated the API, enabling real-time weather updates. While the favorite cities functionality is still in development, the overall app is functional and displays live data. The team overcame several technical challenges, including dynamic routing and ensuring cross-platform compatibility.

- **What did you set out to do, and what actually got done?**  
Although not all initial goals were met, such as the favorite cities feature, the project achieved key objectives. The API was integrated successfully, and the app’s dynamic components and responsive design were implemented effectively across different devices.

- **What was the largest victory?**  
The largest victory was the successful integration of the API, which allows for real-time weather updates. Additionally, the app’s seamless performance across both iOS and Android platforms demonstrated the flexibility and scalability of the front-end design.

- **Final assessment of the project**  
Overall, the project was a valuable learning experience. With the API integration complete, the app has a strong foundation for further development. Given more time, features like saving favorite cities could be implemented, making the app even more functional as initially envisioned.
