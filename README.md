<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** itsevalieu, cra-twitter, itsevalieu, itsevalieu@gmail.com, cra-twitter.io, project_description
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- [![Contributors][contributors-shield]][contributors-url] -->
<!-- [![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url] -->

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/itsevalieu/cra-twitter">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">CRA Twitter</h3>

  <p align="center">
    Search Twitter for keywords and retrieve a listing of the top 5 tweets, ordered by most popular, so that I can monitor trends and hashtags in my industry.
    <br />
    <a href="https://github.com/itsevalieu/cra-twitter"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/itsevalieu/cra-twitter">View Demo</a>
    ·
    <a href="https://github.com/itsevalieu/cra-twitter/issues">Report Bug</a>
    ·
    <a href="https://github.com/itsevalieu/cra-twitter/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <!-- <li><a href="#prerequisites">Prerequisites</a></li> -->
        <li><a href="#installation">Installation</a></li>
        <li><a href="#available-scripts">Available Scripts</a></li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgements">Acknowledgements</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

### User Requirements:

As a Social Media Manager, I need an easy way to search Twitter for keywords and retrieve a
listing of the top 5 tweets, ordered by most popular, so that I can monitor trends and hashtags in
my industry. (Hint: use the Twitter API query param result_type=popular)

### Acceptance Criteria

1. App should display a title, search, list of tweets, and hashtag container (see mocks)
2. User should be able to search for tweets by keyword
   a. Search should be debounced
   b. Search should only return (5) tweets
   c. Hashtags found should be added to the hashtag list
3. Tweets should match the mocks, and include the following:
   a. Avatar of the author
   b. Username of the author
   c. Tweet content
   d. Clickable URL of the tweet
   e. Clickable hashtag
4. User should be able to click a “Load More” button to load additional tweets
   a. It should append to the list of tweets
   b. It should only add (5) additional tweets each click
   c. It should continue to add tweets until the API does not return more
   i. Hint: use the Twitter API query param max_id
   d. If unique hashtags are found they should be appended to the hashtag list
5. User should be able to filter tweets by clicking on a hashtag
   a. Filter should be able to be set and unset
   b. When set, the list of tweets should only include those with a matching hashtag
   c. When unset, the list of tweets should be reset to its state before filtering

### Non-Functional Requirements

1. Use functional components with hooks over class components
2. Use CSS/SASS/LESS or CSS-in-JS (e.g. Styled Components, Emotion, etc.).
   a. Do not use libraries like Material-UI or Bootstrap as they do not allow us to
   effectively measure styling competency
3. Ensure the app is fully responsive (see mocks)
4. Ensure the app matches the designs (see mocks)
5. Ensure the app code is clean, readable, and maintainable
6. [Extra Credit] Write tests for the application as you feel appropriate

### Built With

- React (CRA)
- Jest
- React Testing Library
- [Twitter API](https://developer.twitter.com/en/docs/api-reference-index#twitter-api-v1)
  - https://api.twitter.com/1.1/search/tweets.json
- [styled-components](https://styled-components.com/)
- [axios](https://www.npmjs.com/package/axios)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

<!-- ### Prerequisites

This is an example of how to list things you need to use the software and how to install them. -->

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/itsevalieu/cra-twitter.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Created an .env file at the root folder structure. It should include:
   ```sh
   REACT_APP_TWITTER_BEARER_TOKEN={YOUR BEARER TOKEN FOR TWITTER}
   ```

### Available Scripts

In the project directory, you can run:

1.  Start the app in the development mode.
    `sh npm start `
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    The page will reload if you make edits. You will also see any lint errors in the console.
2.  Start the proxy server for development.
    `sh npm run proxy`
    You need to start the proxy server in order to make requests to the Twitter API.
3.  Test
    `sh npm test `
    Launches the test runner in the interactive watch mode.
    See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

4.  Builds the app for production to the `build` folder.

        ```sh
        npm run build
        ```

    It correctly bundles React in production mode and optimizes the build for the best performance.

    The build is minified and the filenames include the hashes.
    Your app is ready to be deployed!

    See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<!-- USAGE EXAMPLES -->

<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/itsevalieu/cra-twitter/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Your Name - [@itsevalieu](https://twitter.com/itsevalieu) - itsevalieu@gmail.com

Project Link - [https://github.com/itsevalieu/cra-twitter](https://github.com/github_username/cra-twitter)

<!-- ACKNOWLEDGEMENTS -->

<!-- ## Acknowledgements

- []()
- []()
- []() -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/itsevalieu/cra-twitter.svg?style=for-the-badge
[contributors-url]: https://github.com/itsevalieu/cra-twitter/network/members
[stars-shield]: https://img.shields.io/github/stars/itsevalieu/cra-twitter/stargazers
[issues-shield]: https://img.shields.io/github/issues/itsevalieu/cra-twitter/issues
[license-shield]: https://img.shields.io/github/license/itsevalieu/cra-twitter/blob/master/LICENSE.txt
[license-url]: https://github.com/itsevalieu/cra-twitter/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/eva-lieu
