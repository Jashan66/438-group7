# Project 01 Retrospective and Overview

[Video Walkthrough]()  
[GitHub Repository](https://github.com/Jashan66/438-group7)

## Overview
This is a Weather App developed using the Weatherstack API. Learn more about the API [here](https://weatherstack.com/).

We referred to [this guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) for styling this document.

## Introduction

- How was communication managed?
- How many stories/issues were initially considered?
- How many stories/issues were completed?

## Team Retrospective

### Taimur Hasan

- [My Pull Requests](https://github.com/Jashan66/438-group7/pulls?q=is%3Apr+author%3A%40me+is%3Aclosed)
- [My Issues](https://github.com/Jashan66/438-group7/issues?q=is%3Aissue+is%3Aclosed+assignee%3Atshasan)

#### What was your role, and which stories did you work on?

- **What was the biggest challenge?**  
  The biggest challenge was navigating Expo's documentation. Expo recently upgraded to SDK 51, and this introduced breaking changes that made much of the existing information outdated.

- **Why was it a challenge?**  
  The challenge arose from using a new feature, Expo Router, which adds dynamic routing to the project. Combined with SDK 51, this rendered many React Native Expo guides obsolete, requiring me to carefully study the new documentation.

- **How was the challenge addressed?**  
  I addressed this by thoroughly reading the updated documentation and researching public GitHub projects that implemented the same technologies, such as Expo Router and SDK 51, to gain additional insights.

- **Favorite / most interesting part of the project?**  
  The most interesting part of the project was implementing dynamic routing through the router. Setting up the project structure to handle these dynamic routes was particularly engaging.

- **If you could do it over, what would you change?**  
  I would choose a different API, as the free tier of the Weatherstack API limits requests to 250 per month, making it difficult to test the app extensively. Additionally, I would focus more on structuring the app's core, particularly the configuration files, as perfecting those slowed our progress initially.

- **What is the most valuable thing you learned?**  
  The most valuable lesson I learned was the importance of examining other projects that use the same features early in the development process. While ChatGPT was helpful, seeing real-world implementations made a significant difference.

## Conclusion

- **How successful was the project?**  
  I consider the front-end of the project, which I developed, to be quite successful. The components were dynamic and resizable, working well across various screen sizes. This flexibility also made it easy to reuse the code throughout the app.

- **What did you set out to do, and what actually got done?**  
  I accomplished everything I set out to do. However, in hindsight, I would add features such as dynamic routing for pages, which would make displaying components for different cities more efficient.

- **What was the largest victory?**  
  The biggest victory was that all completed issues worked seamlessly on both iOS and Android. While the app lacks some features, it doesn’t look poorly designed.

- **Final assessment of the project**  
  I am proud of the UI and design of the app. However, I would change how the login system is implemented, possibly by using Firebase or another authentication service. I also wanted to use a context model to manage state throughout the app, but I had to rely on passing props instead, which worked but wasn’t ideal. In the future, I’d explore using plugins or other tools to further enhance the app’s functionality.


