# Session Minds Frontend Documentation

## Introduction

Code Institute - Portfolio Project 5 - Advanced Frontend with React<br>

The developed application of this project is called Session Minds and acts as a platform, where users can find and share the best tools and methods for running work related workshops, meetings or other actions to be more motivated, productive and efficient. The target group for this platform is people working in the consulting industry, workshop facilitators and moderators.<br>

The idea for this project comes from real world experience and the struggle to find the best method or tool for conducting workshops with clients to solve their problems as best as possible.<br>

[The deployed version can be found here!](https://sessionminds-fe-0b8daceb91f0.herokuapp.com/)

[Documentation for the Backend with API can be found here!](https://github.com/DennisSchenkel/sessionminds-backend)

![Website Mockup](/documentation/images/mockup.png)

## Table of Contents

- [Introduction](#introduction)

- [Use Case](#use-case)
- [User Experience](#user-experience)
  - [Design](#design)
    - [Color Scheme](#color-scheme)
    - [Imagery](#imagery)
    - [Typography](#typography)
    - [Wireframes](#wireframes)
  - [Features](#features)
    - [UX/UI](#uxui)
    - [CRUD](#crud)
    - [Future Features](#future-features)
- [Agile Project Management](#agile-project-management)
  - [Naming Conventions](#naming-conventions)
  - [Milestones, User Stories & Tasks](#milestones-user-stories--tasks)
- [Development](#development)
  - [Database](#database)
  - [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Frameworks](#frameworks)
    - [Modules, Libraries & Plugins](#mudules-libraries--plugins)
    - [Programs & Tools](#programs--tools)
  - [Deployment](#deployment)
    - [Version Control](#version-control)
    - [Cloudinary](#cloudinary)
    - [Heroku Deployment](#heroku-deployment)
  - [Component Reusability](#component-reusability)
  - [Testing](#testing)
    - [Validator Testing](#validator-testing)
    - [Manual Testing](#manual-testing)
    - [Possible Improvements](#possible-improvements)
    - [Issues During Development](#issues-during-development)
    - [Known Unfixed Bugs](#known-unfixed-bugs)
- [Credits](#credits)
  - [Resources](#resources)
  - [Acknowledgements](#acknowledgements)

## Use Case

The Session Minds gives consultants, workshop facilitators and moderator an easy way to find the right method (called tools) for their upcoming workshop, team meeting or ideation session. To make exploring and finding the right solution easier, all tools are categorized and can be searched. Users can vote for tools, so that the list of tools can be sorted for the best rated ones.<br>

For each tool, the users find all needed instructions and are able to comment on tools and start a discussion.<br>

As an experienced facilitator, users can add new tools to the platform and build up a reputation as one of the best rated authors on the platform. All upvotes for an author's tools are summed up and show the overall amount of votes the author collected.<br>

Tools could easily be shared on platforms like LinkedIn and the authors can build up a reputation for themselves.<br>

[The deployed version can be found here!](https://sessionminds-fe-0b8daceb91f0.herokuapp.com/)

## User Experience

### Design

#### Color Scheme

The color scheme for this project is very simple and based on only a handful of colors. The aim is to not distract the users from the content and produce an easy and good overview of all the functionalities.<br>

- The main color is a variant of teal for the logo and links on the website. For a hover effect a slightly darker tone is used.

- The second main color is the background in the header, with a light gray.

- Further colors like blue and red are standard colors within the bootstrap framework and only appear very rarely.

![Session Mind Colore Scheme](/documentation/images/sessionminds-colors.png)

#### Imagery

The logo was created using the SVGLogoMaker and is kept simple to not distract from the content. The mobile logo and favicon were created by manipulating the logo using Affinity Designer 2.<br>

For the categories (topics) and tool icons, emojis were used as a simple and versatile way of creating open and fun imagery.<br>

Images used as profile images for test purposes were created with ChatGPT and DALL-E 3.<br>

#### Typography

For this project, no special typography was used.<br>

The font is the standard font of the used browser.<br>

Only different font-size and boldness were used.<br>

#### Wireframes

Wireframes show the design for the desktop view. For the mobile use, the sidebar disappiears and the main content stretches over the whole screen.

<details>
<summary>Home</summary>

**Home Screen**
![Home](/documentation/images/wireframes/Home.png)

</details>

<details>
<summary>Tools</summary>

**List Of Tools || Single Tool View**

Left: List of tools with voting feature and comment count.<br>
Right: The page of a single tool with comments and votes features as well as author profile.<br>
<br>

![Tools](/documentation/images/wireframes/Tools.png)

**Tool Editor**
![Tools-Editor](/documentation/images/wireframes/Tools-Editor.png)

</details>

<details>
<summary>Topics</summary>

Left: A list of all topics available with the amount of allocated tools<br>
Right: A list of tools belonging to the selected topic.<br>
<br>

**List Of All Topics || List Of Tools Related To Topic**
![Topics](/documentation/images/wireframes/Topics.png)

</details>

<details>
<summary>Contributors & Profiles</summary>

**List Of Contributors || Single Contributor Profile**

Left: A list of all contributors that have contributed at least one tool.<br>
Right: The profile of a single contributor with the contributed tools.<br>
<br>

![Contributors](/documentation/images/wireframes/Contributors.png)

**Profile Editor**
![Profile-Editor](/documentation/images/wireframes/Profile-Editor.png)

</details>

<details>
<summary>Misc</summary>

**Login Page || Registration Page**

Left: Login page<br>
Right: Registration page<br>
<br>

![Login & Regist](/documentation/images/wireframes/Login-Regist.png)

**User Menus**
![User Menus](/documentation/images/wireframes/User-Menus.png)

</details>

### Features

#### UX/UI

In this section, I point out some of the more advanced or useful features of this application.<br>
<br>

<details>
<summary>Search</summary>
<br>

The search feature enables users to find a specific tool fast. After conducting a search, the results are shown on a separate page.<br>

![Search](/documentation/images/features/search.gif)

</details>
<br>

<details>
<summary>Emojis</summary>
<br>

When creating a new tool or creating an existing one, users have to select an Emoji as tool icon. For this feature the module "Emoji Picker React" was implemented.<br>

![Emojis](/documentation/images/features/emojis.gif)

</details>
<br>

<details>
<summary>Voting</summary>
<br>

Users can vote and undo their vote in the tool list view where ever it is shown, but only if they are registered and logged in.<br>

![Vote List View](/documentation/images/features/vote-list-view.gif)

Users can vote and undo their vote in the tools details view, but only if they are registered and logged in.<br>

![Vote Details View](/documentation/images/features/vote-details-view.gif)

</details>
<br>

<details>
<summary>Commenting</summary>
<br>

Users can comment on tools, but only if they have added first name and last name to their profile.<br>

![Write Comment](/documentation/images/features/comment-create.gif)

Users can delete their own comments. They have to confirm the deletion in a modal.<br>

![Delete Comment](/documentation/images/features/comment-delete.gif)

</details>
<br>

<details>
<summary>Sorting</summary>
<br>

Users are able to sort list for different options.

- Tools: Top (Most votes) & Latest
- Topics: Top (Most tools) & Abc (Alphabetically)
- Contributors: Tools (Most Tools) & Votes (Most cumulated votes)

![Sorting](/documentation/images/features/sorting.gif)

</details>
<br>

<details>
<summary>Username</summary>
<br>

The registration and the profile database modal have been changed in a way that only a valid email address is accepted as username instead of a string.<br>

![Registration](/documentation/images/features/registration.png)

</details>
<br>

#### CRUD

CRUD functionality is implemented with the following features:

**Profile**

- Create Profile
- Read Profile
- Update Profile
- Delete Profile
  <br>

**Tool**

- Create Tool
- Read Tool
- Update Tool
- Delete Tool
  <br>

**Votes**

- Create - Vote for tool
- Read - Get tool vote count
- Delete - Undo vote for tool
  <br>

**Comments**

- Create - Comment on a tool
- Read - Get tool comments
- Delete - Delete a existing comment
  <br>

#### Future Features

For future development, the following featured can be of interest.

**HTTP Only Cookie Based Tokens**
At the moment, access tokens and refresh tokens are saved in the local storage. To increase the safety of the platform, tokens should be saves using HTTP only cookies.<br>

**Social Auth**
Users should be able to register and login by using a social authentication feature. Platforms for registration could be Google, LinkedIn and GitHub.<br>

**Needed Materials**
Every tool should have a list of all the materials needed to facilitate a workshop with the given tool.<br>

**Multiple Step Instructions**
The instructions of the tools should be separated in multiple steps. Users should be able to add, delete and rearrange steps.<br>

**Uploading Images**
For better visualization users should be able to upload images to their tool descriptions. For each step, multiple images should be possible.<br>

**Commenting Comments**
Users should be able to comment on comments of other users.<br>

**Voting Comments**
Users should be able to vote on other users comments. The votes should then have an effect on the sorting, with the best voted at the top.<br>

## Agile Project Management

This project was developed using an agile approach for structuring backend and frontend functionalities, as well as planning and tracking the development process. The project was separated into several milestones, each containing one or multiple user stories, each being structured into several different tasks. Additionally, tasks were divided into frontend (FE) and backend (BE) tasks.<br>
<br>
Each user story and task was also labeled using the MoSCoW methodology with the tags must have, should have, could have and won't have. Also tags for user story, task and draft were used.

### Naming Conventions

For naming conventions, milestones were numbered, starting with 0 for the basic project setup and going up in numbers, based on the logical next development steps. Each User Story was marked with "MS-X", and X standing for the associated milestone. Each task was then marked with (FE) for frontend and (BE) for backend. For the milestone covering the documentation, "MS-D" was introduced.<br>
<br>
The final structure looks like this:<br>
<br>

- (MS-1) Profiles (Milestone)
- (MS-1) - USER STORY: User profiles
- (MS-1) - BE - TASK: Profile app setup
- (MS-1) - FE - TASK: Profile information page

### Milestones, User Stories & Tasks

<details>
<summary>MS-D Documentation</summary>
<br>
This milestone contains everything related to the final documentation.<br>

[(MS-D) Documentation](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/8)(Milestone)

[[MS-D] - TASK: Documentation](https://github.com/DennisSchenkel/sessionminds-frontend/issues/32)

</details>

<details>
<summary>MS-0 Setup</summary>
<br>
This milestone contains all user stories and tasks related to the initial setup and settings.<br>

[(MS-0) Setup](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/1)(Milestone)

[[MS-0] - BE - TASK: Cloudinary setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/1)

[[MS-0] - FE - TASK: Setup React app](https://github.com/DennisSchenkel/sessionminds-frontend/issues/19)

[[MS-0] - FE - TASK: Create all mayor components](https://github.com/DennisSchenkel/sessionminds-frontend/issues/20)

[[MS-0] - FE - TASK: Create Header](https://github.com/DennisSchenkel/sessionminds-frontend/issues/21)

[[MS-0] - FE - TASK: Mobile friendly design](https://github.com/DennisSchenkel/sessionminds-frontend/issues/31)

</details>

<details>
<summary>MS-1 Profiles</summary>
<br>
This milestone contains all user stories and tasks related to user profiles.<br>

[(MS-1) Profile](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/2)(Milestone)

[[MS-1] - USER STORY: User profiles](https://github.com/DennisSchenkel/sessionminds-frontend/issues/2)

[[MS-1] - BE - TASK: Profile app setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/3)

[[MS-1] - BE - TASK: Profile API](https://github.com/DennisSchenkel/sessionminds-frontend/issues/6)

[[MS-1] - BE - TASK: Automated login & authentication testing](https://github.com/DennisSchenkel/sessionminds-frontend/issues/26)

[[MS-1] - FE - TASK: Profile information page](https://github.com/DennisSchenkel/sessionminds-frontend/issues/4)

[[MS-1] - FE - TASK: Create/Update profile form](https://github.com/DennisSchenkel/sessionminds-frontend/issues/5)

</details>

<details>
<summary>MS-2 Topics</summary>
<br>
This milestone contains all user stories and tasks related to the categories/topics.<br>

[(MS-2) Topics](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/4)(Milestone)

[[MS-2] - USER STORY: Topics setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/7)

[[MS-2] - BE - TASK: Topics app setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/8)

[[MS-2] - FE - TASK: Categories list page](https://github.com/DennisSchenkel/sessionminds-frontend/issues/9)

[[MS-2] - FE - TASK: Category page with slug](https://github.com/DennisSchenkel/sessionminds-frontend/issues/10)

</details>

<details>
<summary>MS-3 Tools</summary>
<br>
This milestone contains all user stories and tasks related to tools.<br>

[(MS-3) Tools](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/3)(Milestone)

[[MS-3] - USER STORY: Tool creation](https://github.com/DennisSchenkel/sessionminds-frontend/issues/16)

[[MS-3] - USER STORY: Tool update & delete](https://github.com/DennisSchenkel/sessionminds-frontend/issues/11)

[[MS-3] - BE - TASK: Tools app setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/12)

[[MS-3] - BE - TASK: Automated testing for tools](https://github.com/DennisSchenkel/sessionminds-frontend/issues/27)

[[MS-3] - FE - TASK: Create tools list](https://github.com/DennisSchenkel/sessionminds-frontend/issues/14)

[[MS-3] - FE - TASK: Create tool details page](https://github.com/DennisSchenkel/sessionminds-frontend/issues/15)

[[MS-3] - FE - TASK: Create form to add tool entries](https://github.com/DennisSchenkel/sessionminds-frontend/issues/13)

</details>

<details>
<summary>MS-4 Votes</summary>
<br>
This milestone contains all user stories and tasks related to the voting system.<br>

[(MS-4) Votes](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/5)(Milestone)

[[MS-4] - USER STORY: Votes setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/22)

[[MS-4] - BE - TASK: Votes app setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/23)

[[MS-4] - FE - TASK: Show votes for each tool](https://github.com/DennisSchenkel/sessionminds-frontend/issues/24)

[[MS-4] - FE - TASK: Implement voting functionality](https://github.com/DennisSchenkel/sessionminds-frontend/issues/25)

</details>

<details>
<summary>MS-5 Comments</summary>
<br>
This milestone contains all user stories and tasks related to the commenting system.<br>

[(MS-5) Comments](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/6)(Milestone)

[[MS-5] - USER STORY: Commenting tools](https://github.com/DennisSchenkel/sessionminds-frontend/issues/28)

[[MS-5] - BE - TASK: Setup comments app](https://github.com/DennisSchenkel/sessionminds-frontend/issues/29)

[[MS-5] - FE - TASK: Implement comments on tool page](https://github.com/DennisSchenkel/sessionminds-frontend/issues/30)

</details>

<details>
<summary>MS-6 Search</summary>
<br>
This milestone contains all user stories and tasks related to the search functionality.<br>

[(MS-6) Search](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/7)(Milestone)

[[MS-6] - USER STORY: Search feature](https://github.com/DennisSchenkel/sessionminds-frontend/issues/33)

[[MS-6] - BE - TASK: Create search feature in backend](https://github.com/DennisSchenkel/sessionminds-frontend/issues/34)

[[MS-6] - FE - TASK: Create search result page](https://github.com/DennisSchenkel/sessionminds-frontend/issues/35)

[[MS-6] - FE - TASK: Implement search feature](https://github.com/DennisSchenkel/sessionminds-frontend/issues/36)

</details>

## Development

### Technologies Used

#### Languages

The following languages have been used.<br>

- HTML
- CSS
- JavaScrips

#### Frameworks

The following frameworks have been used.<br>

- [Bootstrap](https://getbootstrap.com/)
- [React Bootstrap](https://react-bootstrap.netlify.app/)
- [FontAwesome](https://fontawesome.com/)

#### Modules, Libraries & Plugins

The following modules, libraries and plugins have been used.<br>

- [Axios](https://axios-http.com/) (For API request handling)
- [Emoji Picker React (v4)](https://www.npmjs.com/package/emoji-picker-react?activeTab=readme) (For Emoji selection in forms)
- [React](https://react.dev/) (For building the frontend)

#### Programs & Tools

During the development of this application, the following programs and tools have been used.<br>
<br>

- [Visual Studio Code](https://code.visualstudio.com/) (IDE - Integrated Development Environment)
- [Figma](https://www.figma.com/) (Creating Mockups)
- [dbdiagram.io](https://dbdiagram.io/) (Creating database visualization)
- [Postman](https://www.postman.com/) (For API testing)
- [Heroku](https://www.heroku.com/home) (Deployment of final application)
- [Git](https://git-scm.com/) (Version control)
- [GitHub](https://github.com/) (Used as cloud repository)
- [CI Postgres Database](https://dbs.ci-dbs.net/) (Used for database hosting)
- [ESLint](https://eslint.org/) (JavaScript testing)
- [W3C HTML Validator](https://validator.w3.org/) (HTML testing)
- [Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/) (CSS testing)
- [Lighthouse](https://lighthouse-metrics.com/) (Testing of Performance, Accessibility, Best Practices and SEO)
- [Google Chrome Dev Tools](https://developer.chrome.com/) (Working with console and HTML output)
- [Affinity Design 2](https://affinity.serif.com/de/designer/) (Image editing)
- [DALL-E 3](https://openai.com/index/dall-e-3/) (For generating profile images)
- [SVGLogoMaker.org](https://svglogomaker.org/) (Creating a simple logo)
- [Cloudinary](https://cloudinary.com/) (As external hosting services for images)
- [Website Mockup Generator](https://websitemockupgenerator.com/) (For creating a mockup of deployed application)
- [Coolors](https://coolors.co/) (For creating a color palette)

**Vite & React**

Vite as a build tool was used to set up a ReactJS app, since create-react-app (CRA) is no longer the recommended method.<br>
I chose to use Vite because I ran into several issues of deprecated code and vulnerabilities when using CRA, and I wasn't able to fix them.<br>
[More about vite](https://vitejs.dev/guide/)<br>
<br>
Vite came with some additional ESlint rules I used.<br>

### Deployment

#### Version Control

This application was developed using Visual Studio Code as the IDE and GitHub for hosting the repository.<br>
<br>
Git was used for version control by using the following comments:<br>
<br>

- git add filename - Select the files that should be uploaded and updated to the GitHub repository.
- git commit -m "commit message" - Commenting the commit to better understand the changes in this specific commit.
- git push - Upload the commit to GitHub.

#### Cloudinary

For using Cloudinary as a hosting provider for images, the following steps have to be conducted:<br>
<br>

- Create a Cloudinary account.
- Login and visit the Cloudinary user account.
- On the bottom left side, click on the gear symbol.
- On the top left, click on "API Keys".
- Click "Generate New API Key" on the top right.
- Update the Django settings.py with API key.
- Use the API in the Heroku deployment settings like described in the next step.

#### Heroku Deployment

**Step 0: Initial Settings**

- Check if all dependencies are listet in the package.json.
  - Add "heroku-postbuild": "npm run build" to scripts
- Modify axiosDefault.js
  - Add the baseURL for Axios
- Create Procfile in root directory with the following content:web: npm run start

**Step 1: Use Account**

- Create a Heroku account
- Log into the Heroku account

**Step 2: Create New App**

- On the dashboard, click "New" in the upper right corner.
- Select "Create new app"
- Select a name for the application - the name should only contain lowercase letters, numbers, and dashes.
- Choose a region. (Europe as we are in Europe)

**Step 3: Define Deployment Method**

- Select GitHub as deployment method
- Connect GitHub account to Heroku
- Select account and search for repository
- Connect to found repository

**Step 4: Settings**

- Switch to the settings page (Menu in the top)
- Click on "Reveal Config Vars"
- The following Key/Value pairs have been added:
  - VITE_BASE_URL
- In the next section, click on "Add buildpack"
- If not already selected, add Node.js

**Step 5: Deploy Application**

- Switch to the deploy page (Menu in the top)
- Look under manual deployment
- Select a branch to deploy (Main in my case)
- Click "Deploy Branch"

**Step 6: Use App**

- Heroku will then set up the virtual environment with all packages, modules and libraries needed. (This can take some time)
- When Heroku is done with the deployment, click "View" and start to use the
- Use app
  <br>

[The deployed version can be found here!](https://sessionminds-fe-0b8daceb91f0.herokuapp.com/)
<br>

### Component Reusability

One of the main featured of React is the reusability of components. In this project, multiple components were used at multiple places within the application.

- The ToolListItem.jsx component is used in lists for tools on the home page, the tools page, the search results, the page of each specific topic and the contributors page.

- The various Sidebar components are used at various places of the app. This includes the home page and the pages of tools, topic and contributors.

- The Paginator.jsx component was used in all list to enable pagination.

### Testing

#### Validator Testing

<details>
<summary>HTML Validator</summary>
<br>

All tested pages of the application passed the WC3 HTML Validator without errors.<br>

**Home Page**
![HTML Validator Home](/documentation/images/html-valid-home.png)

**Tools Page**
![HTML Validator Home](/documentation/images/html-valid-tools.png)

**Tool Details Page**
![HTML Validator Home](/documentation/images/html-valid-tool-details.png)

**Topics Page**
![HTML Validator Home](/documentation/images/html-valid-topics.png)

**Contributors Page**
![HTML Validator Home](/documentation/images/html-valid-contributors.png)

**Profile Page**
![HTML Validator Home](/documentation/images/html-valid-profile.png)

<br>
</details>

<details>
<summary>CSS Validator</summary>
<br>
The application passed the WC3 CSS Validator without errors.<br>

![CSS Validator](/documentation/images/css-validator.png)

<br>
</details>

<details>
<summary>JS Validator</summary>
<br>
ESLint was used during the entire development and all issues were fixed as they came up. No further issues or errors are known.<br>

<br>
</details>

<details>
<summary>Lighthouse Desktop</summary>
<br>

The issue with bad performance of the tool editor stems from the used module for the Emoji Picker. This module is causing very long loading times for lighthouse.

![Lighthouse Desktop](/documentation/images/lighthouse-desktop.png)

<br>
</details>

<details>
<summary>Lighthouse Mobile</summary>
<br>

The issue with bad performance of the tool editor stems from the used module for the Emoji Picker. This module is causing very long loading times for lighthouse.

![Lighthouse Mobile](/documentation/images/lighthouse-mobile.png)

<br>
</details>

#### Manuel Testing

<details>
<summary>Header</summary>
<br>

| **Test**                      | **Description**                                   | **Expected Outcome**                                                     | **Result** |
| ----------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------ | ---------- |
| **Header Logged Out**         |                                                   |                                                                          |            |
| ---                           | ---                                               | ---                                                                      | ---        |
| Navigate to login page        | Clicking on the "Login" link in the header        | When clicking on "Login" the login page loads                            | Pass       |
| Navigate to registration page | Clicking on the "Regist" link in the header       | When clicking on "Regist" the registration page loads                    | Pass       |
| Navigate to home page         | Clicking on the "Home" link in the header         | When clicking on "Home" the home page loads                              | Pass       |
| Navigate to home page by logo | Clicking on the logo in the header                | When clicking on the logo the home page loads                            | Pass       |
| Navigate to tools page        | Clicking on the "Tools" link in the header        | When clicking on "Tools" the tools page loads                            | Pass       |
| Navigate to topic page        | Clicking on the "Topic" link in the header        | When clicking on "Topic" the topic page loads                            | Pass       |
| Navigate to contributors page | Clicking on the "Contributors" link in the header | When clicking on "Contributors" the contributors page loads              | Pass       |
| Open search                   | Clicking the search icon in the header            | When clicking on the search icon, the search dropdown opens              | Pass       |
| Close search                  | Clicking the search icon in the header again      | When clicking on the search icon again, the search dropdown closes       | Pass       |
| Conduct search                | Conducting a search                               | When conducting a search, the search results page with the results loads | Pass       |

<br>

| **Test**                      | **Description**                                        | **Expected Outcome**                                                               | **Result** |
| ----------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------- | ---------- |
| **Header Logged In**          |                                                        |                                                                                    |            |
| ---                           | ---                                                    | ---                                                                                | ---        |
| Navigate to home page         | Clicking in the "Home" link in the header              | When clicking on "Home" the home page loads                                        | Pass       |
| Navigate to home page by logo | Clicking in the logo in the header                     | When clicking on the logo the home page loads                                      | Pass       |
| Navigate to tools page        | Clicking in the "Tools" link in the header             | When clicking on "Tools" the tools page loads                                      | Pass       |
| Navigate to topic page        | Clicking in the "Topic" link in the header             | When clicking on "Topic" the topic page loads                                      | Pass       |
| Navigate to contributors page | Clicking in the "Contributors" link in the header      | When clicking on "Contributors" the contributors page loads                        | Pass       |
| Open profile dropdown         | Hovering over the profile image in header              | When hovering over the profile image, a dropdown menu opens                        | Pass       |
| Close profile dropdown        | Moving the mouse away from the profile image in header | When removing the mouse from the profile image, the dropdown menu closes           | Pass       |
| Conduct search                | Conducting a search                                    | When conducting a search, the search results page with the results loads           | Pass       |
| Navigate to add tool page     | Clicking on "Add Tool" link in dropdown menu           | When clicking on "Add Tool" the add tool page loads                                | Pass       |
| Navigate to profile page      | Clicking on "Profile" link in dropdown menu            | When clicking on "Profile" the profile page of the logged in user loads            | Pass       |
| Logging out                   | Clicking on "Logout" link in dropdown menu             | When clicking on "Logout" the user gets logged out and redirected to the home page | Pass       |

<br>
</details>

<details>
<summary>Home Page</summary>
<br>

| **Test**                      | **Description**                                   | **Expected Outcome**                                                     | **Result** |
| ----------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------ | ---------- |
| **Home Page**                 |                                                   |                                                                          |            |
| ---                           | ---                                               | ---                                                                      | ---        |
| Navigate to login page        | Clicking on the "Login" link in the header        | When clicking on "Login" the login page loads                            | Pass       |
| Navigate to registration page | Clicking on the "Regist" link in the header       | When clicking on "Regist" the registration page loads                    | Pass       |
| Navigate to home page         | Clicking on the "Home" link in the header         | When clicking on "Home" the home page loads                              | Pass       |
| Navigate to home page by logo | Clicking on the logo in the header                | When clicking on the logo the home page loads                            | Pass       |
| Navigate to tools page        | Clicking on the "Tools" link in the header        | When clicking on "Tools" the tools page loads                            | Pass       |
| Navigate to topic page        | Clicking on the "Topic" link in the header        | When clicking on "Topic" the topic page loads                            | Pass       |
| Navigate to contributors page | Clicking on the "Contributors" link in the header | When clicking on "Contributors" the contributors page loads              | Pass       |
| Open search                   | Clicking the search icon in the header            | When clicking on the search icon, the search dropdown opens              | Pass       |
| Close search                  | Clicking the search icon in the header again      | When clicking on the search icon again, the search dropdown closes       | Pass       |
| Conduct search                | Conducting a search                               | When conducting a search, the search results page with the results loads | Pass       |

<br>
</details>

<details>
<summary>Tools</summary>
<br>

| **Test**                  | **Description**                                                              | **Expected Outcome**                                                                                    | **Result** |
| ------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------- |
| **Tools List Page**       |                                                                              |                                                                                                         |            |
| ---                       | ---                                                                          | ---                                                                                                     | ---        |
| Clicking on tool in list  | Clicking on a tool in the list of tool                                       | When clicking in a tool, the details page for the selected tool loads                                   | Pass       |
| Filter for "Latest"       | Filtering the list of tools for the latest created tools                     | When clicking on "Latest" in the top of the tool list, the list sorts with latest tool at the top       | Pass       |
| Filter for "Top"          | Filtering the list of tools for the top voted tools                          | When clicking on "Top" in the top of the tool list, the list sorts with the most voted tools at the top | Pass       |
| Navigate using pagination | Navigating the different pages by using navigation on the bottom of the list | When selecting a specific page of the pagination list at the bottom, the selected page loads            | Pass       |

<br>

| **Test**                       | **Description**                                                                               | **Expected Outcome**                                                                                                      | **Result** |
| ------------------------------ | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Tools Details Page**         |                                                                                               |                                                                                                                           |            |
| ---                            | ---                                                                                           | ---                                                                                                                       | ---        |
| Visit tool author profile      | On the tools details page the author is shown. Users can visit the authors profile from there | When clicking on "Go to profile" the profile of the tools author loads                                                    | Pass       |
| "Edit tool" button for owner   | Showing "Edit tool" on tool details page, when user is logged in and owner of the tool        | When user is owner of the tool, a button with "Edit tool" is shown on tool details page                                   | Pass       |
| "Delete tool" button for owner | Showing "Delete tool" on tool details page, when user is logged in and owner of the tool      | When user is owner of the tool, a button with "Delete tool" is shown on tool details page                                 | Pass       |
| Delete tool as owner           | Confirming to delete the tool as its owner                                                    | The tool gets deletes, user gets redirected to home page, confirmation message is shown, tool and vote counts get updated | Pass       |
| "Go Back" link                 | Clicking the "Go Back" link on tool details page                                              | When clicking the "Go Back" link on tool details page, user gets redirected to the previous page                          | Pass       |

<br>

| **Test**                | **Description**                                                    | **Expected Outcome**                                                                                                      | **Result** |
| ----------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Tools Editor**        |                                                                    |                                                                                                                           |            |
| ---                     | ---                                                                | ---                                                                                                                       | ---        |
| Start editing tool      | Clicking "Edit tool" button as owner at tool view                  | When logged in and visiting a tool as its owner, the "Edit tool" button is shown and when clicked, the tool editor loads  | Pass       |
| Save changes            | Making changes to an existing tool and saving them                 | When saving changes to a tool, the tool detail page of the changed tool loads again and the changes are visible           | Pass       |
| Field validation        | When creating or editing a tool, one or more form fields are empty | When letting a form field empty and saving the tool, an error is shown at the form field.                                 | Pass       |
| Selecting Emoji icon    | Selecting an Emoji as tool icon in the editor form                 | When clicking on a Emoji, the selected Emoji is shown on the right side of the Emoji Picker with e delete button under it | Pass       |
| Deleting Emoji icon     | Deleting the selected Emoji                                        | When clicking on the delete button under the selected Emojo, the Emoji disappears and is no longer selected               | Pass       |
| Selecting no Emoji icon | Selecting no Emoji as tool icon                                    | When no Emoji is selected and the form is saved, a default icon is set                                                    | Pass       |

<br>

| **Test**                        | **Description**                                  | **Expected Outcome**                                                       | **Result** |
| ------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------- | ---------- |
| **Tools Features Logged Out**   |                                                  |                                                                            |            |
| ---                             | ---                                              | ---                                                                        | ---        |
| Voting in list view             | Clicking the vote icon in list view              | When clicking on the vote icon, a modal opens with request to log in first | Pass       |
| Voting in tool details view     | Clicking the vote icon on tool details page      | When clicking on the vote icon, a modal opens with request to log in first | Pass       |
| Commenting in tool details view | Trying to comment on a tool on tool details page | When trying to comment on a tool, a message to frist log in is shown       | Pass       |

<br>

| **Test**                        | **Description**                                                                          | **Expected Outcome**                                                                                                          | **Result** |
| ------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Tools Features Logged In**    |                                                                                          |                                                                                                                               |            |
| ---                             | ---                                                                                      | ---                                                                                                                           | ---        |
| Voting in list view             | Clicking the vote icon in list view                                                      | When clicking on the vote icon, the icon changes color, the count increases, the voting worked                                | Pass       |
| Down-doing vote in list view    | Clicking the vote icon in list view again                                                | When clicking on the vote icon again, the icon changes color, the count decreases, the down-voting worked                     | Pass       |
| Voting in tool details view     | Clicking the vote icon on tool details page                                              | When clicking on the vote icon, the icon changes color, the count increases, the voting worked                                | Pass       |
| Down-vote in tool details view  | Clicking the vote icon on tool details list view again                                   | When clicking on the vote icon again, the icon changes color, the count decreases, the down-voting worked                     | Pass       |
| Commenting in tool details view | Writing a comment on a tool on tool details page                                         | When writing a comment, the comment is saved and shown in the list of comments                                                | Pass       |
| Writing short comment           | Writing a comment on a tool on tool details page, that is less than 10 charakters long   | When writing a comment that is less than 10 charakters, a warning is shown "The comment must be at least 10 characters long." | Pass       |
| Initiate comment deletion       | Clicking on "Delete comment" on a comment, written by the user                           | When clicking "Delete comment", a modal opens asking for confirmation to delete the comment                                   | Pass       |
| Confirming comment deletion     | Clicking on "Delete Comment" in confirmation modal                                       | When clicking "Delete Comment" in the confirmation modal, the comment gets deleted and a success message is shown             | Pass       |
| Comment count in list view      | Comment count changing in list view when new comment is posted or old comment is deleted | When the amount of comments for a tool changes, the comment count in list view changes on next load                           | Pass       |

<br>
</details>

<details>
<summary>Topic</summary>
<br>

| **Test**                  | **Description**                                                              | **Expected Outcome**                                                                                              | **Result** |
| ------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------- |
| **Topics List Page**      |                                                                              |                                                                                                                   |            |
| ---                       | ---                                                                          | ---                                                                                                               | ---        |
| Sorting list by "Abc"     | Sorting the list of topics by alphabetical order                             | When clicking in "Abc" filter, the list reloads and results are sorted alphabetically                             | Pass       |
| Sorting list by "Top"     | Sorting the list of topics by the amount of tools                            | When clicking in "Top" filter, the list reloads and results are sorted with topics with the most tools at the top | Pass       |
| Navigate using pagination | Navigating the different pages by using navigation on the bottom of the list | When selecting a specific page of the pagination list at the bottom, the selected page loads                      | Pass       |

<br>

**Topic Tools List Page**
Tests for this page is covered by the tests for the "Tools List Page" since it uses the same component.

<br>
</details>

<details>
<summary>Contributors</summary>
<br>

| **Test**                        | **Description**                                                              | **Expected Outcome**                                                                                                         | **Result** |
| ------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Contributors List Page**      |                                                                              |                                                                                                                              |            |
| ---                             | ---                                                                          | ---                                                                                                                          | ---        |
| Visiting profile of contributor | Going to the profile of a contributor                                        | When clicking on a contributor in the list, the profile page of the selected contributor loads                               | Pass       |
| Sorting the list by "Votes"     | Sorting the list of contributors by the amount of accumulated votes          | When clicking in "Votes" filter, the list reloads and results are sorted with the contributor with the most votes at the top | Pass       |
| Sorting the list by "Tools"     | Sorting the list of contributors by the amount of created tools              | When clicking in "Tools" filter, the list reloads and results are sorted with the contributor with the most tools at the top | Pass       |
| Navigate using pagination       | Navigating the different pages by using navigation on the bottom of the list | When selecting a specific page of the pagination list at the bottom, the selected page loads                                 | Pass       |

<br>
</details>

<details>
<summary>Profile</summary>
<br>

| **Test**                      | **Description**                                              | **Expected Outcome**                                                               | **Result** |
| ----------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------- | ---------- |
| **Profile Page**              |                                                              |                                                                                    |            |
| ---                           | ---                                                          | ---                                                                                | ---        |
| Deleting the profile as owner | Deleting the profile by clicking the "Delete profile" button | When clicking the "Delete profile" button, a confirmation modal opens              | Pass       |
| Confirm deletion as owner     | Confirming the deletion in the modal                         | When clicking the "Delete Profile!" button in the modal, the profile gets deleted  | Pass       |
| Social media links            | Clicking on the social media links of the profile            | When clicking on one of the social media links, the linked page opens in a new tab | Pass       |

<br>
Test for the list of tools related to the profile are covered by the tests for the "Tools List Page" since it uses the same component.

<br>

| **Test**                                | **Description**                                                   | **Expected Outcome**                                                                                | **Result** |
| --------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------- |
| **Profile Editor**                      |                                                                   |                                                                                                     |            |
| ---                                     | ---                                                               | ---                                                                                                 | ---        |
| Navigate to profile editor              | Going to the profile editor by clicking the "Edit profile" button | When clicking the "Edit profile" button, the profile editor with the user's information loads       | Pass       |
| Saving profile changes                  | Saving changes made to the profile                                | When clicking the "Save Profile" button, the profile of the user loads and the changes are shown    | Pass       |
| Saving profile without first name       | Saving profile without first name entered                         | When clicking the "Save Profile" button, a warning is shown to fill in the "First Name" field       | Pass       |
| Long "First Name"                       | Enter "First Name" longer than 30 characters                      | Form field only accepts 30 characters                                                               | Pass       |
| Saving profile without last name        | Saving profile without last name entered                          | When clicking the "Save Profile" button, a warning is shown to fill in the "Last Name" field        | Pass       |
| Long "Last Name"                        | Enter "Last Name" longer than 30 characters                       | Form field only accepts 30 characters                                                               | Pass       |
| Selecting wrong data type               | Selecting a file with the wrong data type as profile image        | When trying to select a file type that is not allowed, the file browser doesn't allow the selection | Pass       |
| Image file size to big                  | Selecting a file with a size of more then 2MB                     | When trying to select a file larger then 2MB a warning is shown                                     | Pass       |
| Form field "Job Title" empty            | Letting the "Job Title" form field emtpy                          | Profile can be saved                                                                                | Pass       |
| Long "Job Title"                        | Enter "Job Title" longer than 50 characters                       | Form field only accepts 50 characters                                                               | Pass       |
| Form field "Profile Description" empty  | Letting the "Profile Description" form field emtpy                | Profile can be saved                                                                                | Pass       |
| Long "Profile Description"              | Enter "Profile Description" longer than 350 characters            | Form field only accepts 350 characters                                                              | Pass       |
| Form field for social media links empty | Letting the social media form field emtpy                         | Profile can be saved                                                                                | Pass       |
| Non-URL in social media form fiels      | Saving profile with a no valid url in a social media form field   | Profile can not be saved and a warning is shown to use a valid URL                                  | Pass       |

<br>
</details>

<details>
<summary>Login & Registration</summary>
<br>

| **Test**   | **Description**                                                 | **Expected Outcome**                                    | **Result** |
| ---------- | --------------------------------------------------------------- | ------------------------------------------------------- | ---------- |
| **Login**  |                                                                 |                                                         |            |
| ---        | ---                                                             | ---                                                     | ---        |
| Login test | Entering correct credentials into login form and pressing login | User gets logged in and redicrected to the home page    | Pass       |
| Login test | Entering wrong username into login form and pressing login      | Error is shown "Invalid credentials, please try again." | Pass       |
| Login test | Entering wrong password into login form and pressing login      | Error is shown "Invalid credentials, please try again." | Pass       |
| Login test | Entering no username into login form and pressing login         | Validator hint to fill form field is shown              | Pass       |
| Login test | Entering no password into login form and pressing login         | Validator hint to fill form field is shown              | Pass       |

<br>

| **Test**          | **Description**                             | **Expected Outcome**                                                                               | **Result** |
| ----------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------- | ---------- |
| **Registration**  |                                             |                                                                                                    |            |
| ---               | ---                                         | ---                                                                                                | ---        |
| Registration test | Entering correct credentials                | Registration works correctly, user gets redirected to login page and success alarm shown           | Pass       |
| Registration test | Entering no mail address but password       | Showing field validation error "This field may not be blank."                                      | Pass       |
| Registration test | Entering mail addres but no password        | Showing field validation error "This field may not be blank."                                      | Pass       |
| Registration test | Entering password shorter than 8 characters | Showing field validation error "This password is too short. It must contain at least 8 charactes." | Pass       |
| Registration test | Entering invalid mail address               | Showing field validation error "Enter a valid email address."                                      | Pass       |
| Registration test | Entering already used credentials           | Showing error message "A user with this email already exists."                                     | Pass       |
| Registration test | Entering only numeric password              | Showing field validation error "This password is entirely numeric."                                | Pass       |
| Registration test | Entering "password" as password             | Showing field validation error "This password is too common."                                      | Pass       |
| Registration test | Entering not matching passwords             | Showing error message "Passwords do not match."                                                    | Pass       |

<br>

</details>

#### Possible Improvements

**HTTP Only Cookie Tokens**
At the moment, access tokens and refresh tokens are saved in the local storage. To increase the safety of the platform, tokens should be saves using HTTP only cookies.<br>

**Using different Emoji Picker**
The currently used Emoji Picker is effecting the performance of the tool editor dramatically. For further development, a more lightweight Emoji Picker should be implemented<br>

**More Reusable Components**
One possible improvement would be refactoring more components to be usable in multiple places within the application.<bt>

Examples would be: - Tool elements in the lists for results and on the sidebar - Topics in the main topics list and on the sidebar - Contributors in the main contributors list and on the sidebar.<br>

When trying to refactor components to be usable in multiple places, it should always be kept in mind to find the best solution so achieve the desired outcome. A lot can be done with a lot of work and complexity that could be done more easily and maintainable when not trying to create the most advanced code.<br>

**Improved Search**
The search feature can be improved by not only searching for the title of a tool, but also search for author name or the topic of a tool.<br>

#### Issues During Development

The following frontend related issues came up during development but where solved.

**Localhost as baseURL on Heroku frontend**

Issue:<br>
When initially deploying the backend and frontend on Heroku, the baseURL for the API in Vite was still set to the localhost of the local development computer. This caused issues when ever somebody else, not using the development computer, was using the app.<br>

Solution:<br>
Setting the baseURL variable in Heroku.<br>

**Endless loading with expired refresh token**

Issue:<br>
When the refresh token was expired and the page was reloaded, the frontend tried to get a new access token, but the backend returned a 401 error.<br>
This lead to endless loading of various frontend components that didn't get the expected data from the API.<br>

Solution:<br>
A function that checks for an expired refresh token and deletes all data from the local storage was implemented. This lead to a normal loading behavior again.<br>

**Login with wrong credentials not showing error & not loading next page (BE & FE)**

Issue:<br>
During the development, a modal was used to show the login form. When entering wrong credentials and pressing enter, the modal closed, and the home page was loaded.<br>
Although the wrong login credentials were used, no error was retuned by the API and no error was shown in the login form, that itself disappeared with the closing of the modal.<br>

Solution:<br>
In the backend, the login view was updated and an error response for wrong login credentials was added.<br>
In the frontend, the login modal was exchanged with a complete login page that can not close like a modal, when the form is submitted. Due to not closing the modal with the form, the newly created backend response was used for showing the expected error message.<br>

#### Known Unfixed Bugs

No bugs are know at the time of the project submission.

## Credits

### Resources

- All content was written and created by Dennis Schenkel.<br>
- Images were created with the help of DALL-E.<br>
- To give topics unique icons, emojis have been used. A great resource for finding the correct code was [prosettings.com](https://www.prosettings.com/emoji-list/)<br>
- When trying to understand concepts and build this full-stack-application, an unlimited amount of Google searches were conducted and various sources like Stack Overflow, Reddit and the different documentations for Django, Bootstrap and React were used.<br>

### Acknowledgements

- Thanks to Gareth McGirr for providing great mentorship as part of the Code Academy course.
- Thanks to Kay for they effort as a facilitator of the Code Institute team.
- Great thanks go to [Dajana Isbaner](https://github.com/queenisabaer) for being the best fellow student I could wish for.
