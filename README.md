# Session Minds Frontend Documentation

## User Experience

### Design

#### Color Scheme

#### Imagery

#### Typography

#### Mockups

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

#### CRUD

#### Future Features

## Agile Project Management

This project was developed using an agile approach for structuring backend and frontend functionalities, as well as planning and tracking the development process. The project was separated into several milestones, each containing one or multiple user stories, each being structured into several different tasks. Additionally, tasks were divided into frontend (FE) and backend (BE) tasks.<br>
<br>
Each user story and task was also labeled using the MoSCoW methodology with the tags must have, should have, could have and won't have. Also tags for user story, task and draft were used.

### Naming Conventions\*\*

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

This milestone contains everything related to the final documentation.<br>
<br>

[(MS-D) Documentation](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/8)(Milestone)

[[MS-D] - TASK: Documentation](https://github.com/DennisSchenkel/sessionminds-frontend/issues/32)

</details>

<details>
<summary>MS-0 Setup</summary>

This milestone contains all user stories and tasks related to the initial setup and settings.<br>
<br>

[(MS-0) Setup](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/1)(Milestone)

[[MS-0] - BE - TASK: Cloudinary setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/1)

[[MS-0] - FE - TASK: Setup React app](https://github.com/DennisSchenkel/sessionminds-frontend/issues/19)

[[MS-0] - FE - TASK: Create all mayor components](https://github.com/DennisSchenkel/sessionminds-frontend/issues/20)

[[MS-0] - FE - TASK: Create Header](https://github.com/DennisSchenkel/sessionminds-frontend/issues/21)

[[MS-0] - FE - TASK: Mobile friendly design](https://github.com/DennisSchenkel/sessionminds-frontend/issues/31)

</details>

<details>
<summary>MS-1 Profiles</summary>

This milestone contains all user stories and tasks related to user profiles.<br>
<br>

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

This milestone contains all user stories and tasks related to the categories/topics.<br>
<br>

[(MS-2) Topics](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/4)(Milestone)

[[MS-2] - USER STORY: Topics setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/7)

[[MS-2] - BE - TASK: Topics app setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/8)

[[MS-2] - FE - TASK: Categories list page](https://github.com/DennisSchenkel/sessionminds-frontend/issues/9)

[[MS-2] - FE - TASK: Category page with slug](https://github.com/DennisSchenkel/sessionminds-frontend/issues/10)

</details>

<details>
<summary>MS-3 Tools</summary>

This milestone contains all user stories and tasks related to tools.<br>
<br>

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

This milestone contains all user stories and tasks related to the voting system.<br>
<br>

[(MS-4) Votes](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/5)(Milestone)

[[MS-4] - USER STORY: Votes setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/22)

[[MS-4] - BE - TASK: Votes app setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/23)

[[MS-4] - FE - TASK: Show votes for each tool](https://github.com/DennisSchenkel/sessionminds-frontend/issues/24)

[[MS-4] - FE - TASK: Implement voting functionality](https://github.com/DennisSchenkel/sessionminds-frontend/issues/25)

</details>

<details>
<summary>MS-5 Comments</summary>

This milestone contains all user stories and tasks related to the commenting system.<br>
<br>

[(MS-5) Comments](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/6)(Milestone)

[[MS-5] - USER STORY: Commenting tools](https://github.com/DennisSchenkel/sessionminds-frontend/issues/28)

[[MS-5] - BE - TASK: Setup comments app](https://github.com/DennisSchenkel/sessionminds-frontend/issues/29)

[[MS-5] - FE - TASK: Implement comments on tool page](https://github.com/DennisSchenkel/sessionminds-frontend/issues/30)

</details>

<details>
<summary>MS-6 Search</summary>

This milestone contains all user stories and tasks related to the search functionality.<br>
<br>

[(MS-6) Search](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/7)(Milestone)

[[MS-6] - USER STORY: Search feature](https://github.com/DennisSchenkel/sessionminds-frontend/issues/33)

[[MS-6] - BE - TASK: Create search feature in backend](https://github.com/DennisSchenkel/sessionminds-frontend/issues/34)

[[MS-6] - FE - TASK: Create search result page](https://github.com/DennisSchenkel/sessionminds-frontend/issues/35)

[[MS-6] - FE - TASK: Implement search feature](https://github.com/DennisSchenkel/sessionminds-frontend/issues/36)

</details>

## Development

### Database

### Technologies Used

#### Languages

- HTML
- CSS
- Python
- JavaScrips
- ReactJS

#### Frameworks

The following frameworks have been used.<br>
<br>

- [Django](https://www.djangoproject.com/)
- [Bootstrap](https://getbootstrap.com/)
- [React Bootstrap](https://react-bootstrap.netlify.app/)
- [FontAwesome](https://fontawesome.com/)

#### Modules & Libraries & Plugins

- AllAuth (For user uthentication)
- Black (Code formatter for Python)
- Cloudinary (Cloud storage for images)
- [Emoji Picker React (v4)](https://www.npmjs.com/package/emoji-picker-react?activeTab=readme) (For Emoji selection in forms)
- Gunicorn (Python WSGI HTTP server for UNIX)
- OS (For operating system interaction)
- Pep8 (Check Python code for PEP8 conventions)
- Pillow (For image processing)
- Prettier (Code formatter for JavaScript)
- Psycopg 2 (PostgreSQL adapter for the database)
- Python Slugify (For generating url-slugs)
- Summernote (As a WYSIWYG editor)
- Whitenoise (Middleware for serving static files)

#### Programs & Tools

During the development of this application, the following programs and tools have been used.<br>
<br>

- [Visual Studio Code](https://code.visualstudio.com/) (IDE - Integrated Development Environment)
- [Figma](https://www.figma.com/) (Creating Mockups)
- [dbdiagram.io](https://dbdiagram.io/) (Creating database visualization)
- [Heroku](https://www.heroku.com/home) (Deployment of final application)
- [Git](https://git-scm.com/) (Version control)
- [GitHub](https://github.com/) (Used as cloud repository)
- [CI Postgres Database](https://dbs.ci-dbs.net/) (Used for database hosting)
- [CI Python Linter](https://pep8ci.herokuapp.com/) (Python testing)
- [JSHint](https://jshint.com/) (JavaScript testing)
- [W3C HTML Validator](https://validator.w3.org/) (HTML testing)
- [Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/) (CSS testing)
- [Lighthouse](https://lighthouse-metrics.com/) (Testing of Performance, Accessibility, Best Practices and SEO)
- [Google Chrome Dev Tools](https://developer.chrome.com/) (Working with console and HTML output)
- [Flake8](https://flake8.pycqa.org/en/latest/) (Formatting support for Python)
- [Affinity Design 2](https://affinity.serif.com/de/designer/) (Image editing)
- [DALL-E 3](https://openai.com/index/dall-e-3/) (For generating profile images)
- [SVGLogoMaker.org](https://svglogomaker.org/) (Creating a simple logo)
- [Cloudinary](https://cloudinary.com/) (As external hosting services for images)
- [Website Mockup Generator](https://websitemockupgenerator.com/) (For creating a mockup of deployed application)

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

### Testing

#### Manuel Testing

<details>
<summary>Home Page</summary>
<br>

| **Test**          | **Description**                           | **Expected Outcome**                                  | **Result** |
| ----------------- | ----------------------------------------- | ----------------------------------------------------- | ---------- |
| **Home Page**     |                                           |                                                       |            |
| ---               | ---                                       | ---                                                   | ---        |
| Open login        | Clicking in the login link in the header  | When clicking on "Login" the login page loads         | Pass       |
| Open registration | Clicking in the regist link in the header | When clicking on "Regist" the registration page loads | Pass       |

<br>
</details>

<details>
<summary>Misc.</summary>
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

### Issues During Development

**(BE) 405 Get method now allowed**

When setting up the backend django rest framework and loading the API URLs using a browser, the PUT and POST views were showing the 405 method and stating, that I was doing a GET request<br>
Nevertheless, I was able to create and update new entries.<br>
This issue continues to happen, but I tried if calling the API using the frontend would lead to a flawless behavior.<br>

**(BE) 403 HTTP 403 Forbidden**

Message shown: "CSRF Failed: CSRF token missing"

When using the Django Rest Framework API Frontend, Updating and Deleting of content is not possible. This might be due to the wrong authentication methode used.
When using the API with JWT, everything works just finde.

**Login with wrong credentials not showing error & not loading next page**

**Athentication token not deleting**

When testing the behavior of the access token and the authentication token, an error occurred. The tokens still worked after their lifetime, and blacklisting on refresh didn't work.

**Localhost as baseURL on Heroku Frontend**

When deploying the backend and frontend, the baseURL for the API in React was still set to the localhost of the local developmant computer. This caused issues when ever somebody else, not using the development computer, was using the app.

**Endless loading when refresh token is expired**

When the refresh token was expired, the page tried to get a new access token but the backend returned a 401 error.
A check for an expired refresh token was missing that deletes all data fram the local storage to enable normal loading again.

## Credits

- All content was written and created by Dennis Schenkel.
- Images were created with the help of DALL-E.
  <br>
  When trying to understand concepts and build this full-stack-application, an unlimited amount of Google searches were conducted and various sources like Stack Overflow, Reddit and the different documentations for Django, Bootstrap and React were used.

### Resources

To give topics unique icons, emojis have been used. A great resource for finding the correct code was [prosettings.com](https://www.prosettings.com/emoji-list/)

### Acknowledgements

- Thanks to Gareth McGirr for providing great mentorship as part of the Code Academy course.
- Thanks to Kay for they effort as a facilitator of the Code Institute team.
- Great thanks go to [Dajana Isbaner](https://github.com/queenisabaer) for being the best fellow student I could wish for.
