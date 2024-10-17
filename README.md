# Session Minds Frontend Documentation

## User Experience

### Design

#### Color Scheme

#### Imagery

To give categories unique icons, emojis have been used. A great resource for finding the correct code was [prosettings.com](https://www.prosettings.com/emoji-list/)

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

Left: List of tools with voting feature and comment count.
Right: The page of a single tool with comments and votes features as well as author profile.

![Tools](/documentation/images/wireframes/Tools.png)

**Tool Editor**
![Tools-Editor](/documentation/images/wireframes/Tools-Editor.png)

</details>

<details>
<summary>Topics</summary>

Left: A list of all topics available with the amount of allocated tools
Right: A list of tools belonging to the selected topic.

**List Of All Topics || List Of Tools Related To Topic**
![Topics](/documentation/images/wireframes/Topics.png)

</details>

<details>
<summary>Contributors & Profiles</summary>

**List Of Contributors || Single Contributor Profile**

Left: A list of all contributors that have contributed at least one tool.
Right: The profile of a single contributor with the contributed tools.

![Contributors](/documentation/images/wireframes/Contributors.png)

**Profile Editor**
![Profile-Editor](/documentation/images/wireframes/Profile-Editor.png)

</details>

<details>
<summary>Misc</summary>

**Login Page || Registration Page**

Left: Login page
Right: Registration page

![Login & Regist](/documentation/images/wireframes/Login-Regist.png)

**User Menus**
![User Menus](/documentation/images/wireframes/User-Menus.png)

</details>

## Agile Project Management

This project was developed using an agile approach for structuring backend and frontend functionalities, as well as planning and tracking the development process. The project was separated into several milestones, each containing one or multiple user stories, each being structured into several different tasks. Additionally, tasks were divided into frontend (FE) and backend (BE) tasks.

Each user story and task was also labeled using the MoSCoW methodology with the tags must have, should have, could have and won't have. Also tags for user story, task and draft were used.

**Naming Conventions**

For naming conventions, milestones were numbered, starting with 0 for the basic project setup and going up in numbers, based on the logical next development steps. Each User Story was marked with "MS-X", and X standing for the associated milestone. Each task was then marked with (FE) for frontend and (BE) for backend. For the milestone covering the documentation, "MS-D" was introduced.

The final structure looks like this:

- (MS-1) Profiles (Milestone)
- (MS-1) - USER STORY: User profiles
- (MS-1) - BE - TASK: Profile app setup
- (MS-1) - FE - TASK: Profile information page

### Milestones

<br>

### User Stories & Tasks

**MS-D Documentation**
This milestone contains everything related to the final documentation.<br>
[(MS-D) Documentation](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/8)

[[MS-D] - TASK: Documentation](https://github.com/DennisSchenkel/sessionminds-frontend/issues/32)

**MS-0 Setup**
This milestone contains all user stories and tasks related to the initial setup and settings.<br>
[(MS-0) Setup](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/1)

[[MS-0] - BE - TASK: Cloudinary setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/1)

[[MS-0] - FE - TASK: Setup React app](https://github.com/DennisSchenkel/sessionminds-frontend/issues/19)

[[MS-0] - FE - TASK: Create all mayor components](https://github.com/DennisSchenkel/sessionminds-frontend/issues/20)

[[MS-0] - FE - TASK: Create Header](https://github.com/DennisSchenkel/sessionminds-frontend/issues/21)

[[MS-0] - FE - TASK: Mobile friendly design](https://github.com/DennisSchenkel/sessionminds-frontend/issues/31)

**MS-1 Profiles**

This milestone contains all user stories and tasks related to user profiles.<br>

[(MS-1) Profile](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/2)

[[MS-1] - USER STORY: User profiles](https://github.com/DennisSchenkel/sessionminds-frontend/issues/2)

[[MS-1] - BE - TASK: Profile app setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/3)

[[MS-1] - BE - TASK: Profile API](https://github.com/DennisSchenkel/sessionminds-frontend/issues/6)

[[MS-1] - BE - TASK: Automated login & authentication testing](https://github.com/DennisSchenkel/sessionminds-frontend/issues/26)

[[MS-1] - FE - TASK: Profile information page](https://github.com/DennisSchenkel/sessionminds-frontend/issues/4)

[[MS-1] - FE - TASK: Create/Update profile form](https://github.com/DennisSchenkel/sessionminds-frontend/issues/5)

**MS-2 Topics**

This milestone contains all user stories and tasks related to the categories/topics.<br>

[(MS-2) Topics](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/4)

[[MS-2] - USER STORY: Topics setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/7)

[[MS-2] - BE - TASK: Topics app setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/8)

[[MS-2] - FE - TASK: Categories list page](https://github.com/DennisSchenkel/sessionminds-frontend/issues/9)

[[MS-2] - FE - TASK: Category page with slug](https://github.com/DennisSchenkel/sessionminds-frontend/issues/10)

**MS-3 Tools**

This milestone contains all user stories and tasks related to tools.<br>

[(MS-3) Tools](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/3)

[[MS-3] - USER STORY: Tool creation](https://github.com/DennisSchenkel/sessionminds-frontend/issues/16)

[[MS-3] - USER STORY: Tool update & delete](https://github.com/DennisSchenkel/sessionminds-frontend/issues/11)

[[MS-3] - BE - TASK: Tools app setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/12)

[[MS-3] - BE - TASK: Automated testing for tools](https://github.com/DennisSchenkel/sessionminds-frontend/issues/27)

[[MS-3] - FE - TASK: Create tools list](https://github.com/DennisSchenkel/sessionminds-frontend/issues/14)

[[MS-3] - FE - TASK: Create tool details page](https://github.com/DennisSchenkel/sessionminds-frontend/issues/15)

[[MS-3] - FE - TASK: Create form to add tool entries](https://github.com/DennisSchenkel/sessionminds-frontend/issues/13)

**MS-4 Votes**

This milestone contains all user stories and tasks related to the voting system.<br>

[(MS-4) Votes](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/5)

[[MS-4] - USER STORY: Votes setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/22)

[[MS-4] - BE - TASK: Votes app setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/23)

[[MS-4] - FE - TASK: Show votes for each tool](https://github.com/DennisSchenkel/sessionminds-frontend/issues/24)

[[MS-4] - FE - TASK: Implement voting functionality](https://github.com/DennisSchenkel/sessionminds-frontend/issues/25)

**MS-5 Comments**

This milestone contains all user stories and tasks related to the commenting system.<br>

[(MS-5) Comments](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/6)

[[MS-5] - USER STORY: Commenting tools](https://github.com/DennisSchenkel/sessionminds-frontend/issues/28)

[[MS-5] - BE - TASK: Setup comments app](https://github.com/DennisSchenkel/sessionminds-frontend/issues/29)

[[MS-5] - FE - TASK: Implement comments on tool page](https://github.com/DennisSchenkel/sessionminds-frontend/issues/30)

**MS-6 Search**

This milestone contains all user stories and tasks related to the search functionality.<br>

[(MS-6) Search](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/7)

[[MS-6] - USER STORY: Search feature](https://github.com/DennisSchenkel/sessionminds-frontend/issues/33)

[[MS-6] - BE - TASK: Create search feature in backend](https://github.com/DennisSchenkel/sessionminds-frontend/issues/34)

[[MS-6] - FE - TASK: Create search result page](https://github.com/DennisSchenkel/sessionminds-frontend/issues/35)

[[MS-6] - FE - TASK: Implement search feature](https://github.com/DennisSchenkel/sessionminds-frontend/issues/36)

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

The following frameworks have been used.

- [Django](https://www.djangoproject.com/)
- [Bootstrap](https://getbootstrap.com/)
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

During the development of this application, the following programs and tools have been used.

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

### Testing

### Issues During Development

**(BE) 405 Get method now allowed**

When setting up the backend django rest framework and loading the API URLs using a browser, the PUT and POST views were showing the 405 method and stating, that I was doing a GET request<br>
Nevertheless, I was able to create and update new entries.<br>
This issue continues to happen, but I tried if calling the API using the frontend would lead to a flawless behavior.<br>

**(BE) 403 HTTP 403 Forbidden**

Message shown: "CSRF Failed: CSRF token missing"

When using the Django Rest Framework API Frontend, Updating and Deleting of content is not possible. This might be due to the wrong authentication methode used.
When using the API with JWT, everything works just finde.

**Athentication token not deleting**

When testing the behavior of the access token and the authentication token, an error occurred. The tokens still worked after their lifetime, and blacklisting on refresh didn't work.

**Localhost as baseURL on Heroku Frontend**

When deploying the backend and frontend, the baseURL for the API in React was still set to the localhost of the local developmant computer. This caused issues when ever somebody else, not using the development computer, was using the app.

**Endless loading when refresh token is expired**

When the refresh token was expired, the page tried to get a new access token but the backend returned a 401 error.
A check for an expired refresh token was missing that deletes all data fram the local storage to enable normal loading again.

## Credits

### Code Sources

**Profile App (BE)**

In this project, the Django profile app with its structure is greatly inspired and by part copied from the Code Institute examples, although customized in many places.
