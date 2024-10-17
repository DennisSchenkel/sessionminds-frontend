# Session Minds Frontend Documentation

## User Experience

### Design

#### Color Scheme

#### Imagery

To give categories unique icons, emojis have been used. A great resource for finding the correct code was [prosettings.com](https://www.prosettings.com/emoji-list/)

#### Typography

#### Mockups

<summary>Home</summary>

![Home](/documentation/images/wireframes/Home.png)

<summary>Tools</summary>

![Tools](/documentation/images/wireframes/Tools.png)

![Tools-Editor](/documentation/images/wireframes/Tools-Editor.png)

<summary>Topics</summary>

![Topics](/documentation/images/wireframes/Topics.png)

<summary>Contributors & Profiles</summary>

![Contributors](/documentation/images/wireframes/Contributors.png)

![Profile-Editor](/documentation/images/wireframes/Profile-Editor.png)

<summary>Topics</summary>

![Topics](/documentation/images/wireframes/Topics.png)

<summary>Misc</summary>

![Login & Regist](/documentation/images/wireframes/Login-Regist.png)

![User Menus](/documentation/images/wireframes/User-Menus.png)

## Agile Project Management

This project was developed using an agile approach for structuring backend and frontend functionalities, as well as planning and tracking the development process. The project was separated into several milestones, each containing one or multiple user stories, each being structured into several different tasks. Additionally, tasks were divided into frontend (FE) and backend (BE) tasks.

For naming convention, milestones were numbered, starting with 0 for the basic project setup and going up in numbers, based on the logical next development steps. Each User Story was marked with "MS-X", and X standing for the associated milestone. Each task was then marked with (FE) for frontend and (BE) for backend. For the milestone covering the documentation, "MS-D" was introduced.

The final structure looks like this:

- (MS-1) Profiles (Milestone)
- (MS-1) - USER STORY: User profiles
- (MS-1) - BE - TASK: Profile app setup
- (MS-1) - FE - TASK: Profile information page

Each user story and task was also labeled using the MoSCoW methodology with the tags must have, should have, could have and won't have. Also tags for user story, task and draft were used.

### Milestones

[**(MS-D) Documentation**](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/8)
This milestone contains everything related to the final documentation.

[**(MS-0) Setup**](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/1)
This milestone contains all user stories and tasks related to the initial setup and settings.

[**(MS-1) Profile**](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/2)
This milestone contains all user stories and tasks related to user profiles.

[**(MS-2) Topics**](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/4)
This milestone contains all user stories and tasks related to the categories or topics, like it is called in this project.

[**(MS-3) Tools**](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/3)
This milestone contains all user stories and tasks related to tools.

[**(MS-4) Votes**](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/5)
This milestone contains all user stories and tasks related to the voting system.

[**(MS-5) Comments**](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/6)
This milestone contains all user stories and tasks related to the commenting system.

[**(MS-6) Search**](https://github.com/DennisSchenkel/sessionminds-frontend/milestone/7)
This milestone contains all user stories and tasks related to the search functionality.

### User Stories

[[MS-1] - USER STORY: User profiles](https://github.com/DennisSchenkel/sessionminds-frontend/issues/2)

[[MS-2] - USER STORY: Topics setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/7)

[[MS-3] - USER STORY: Tool creation](https://github.com/DennisSchenkel/sessionminds-frontend/issues/16)

[[MS-3] - USER STORY: Tool update & delete](https://github.com/DennisSchenkel/sessionminds-frontend/issues/11)

[[MS-4] - USER STORY: Votes setup](https://github.com/DennisSchenkel/sessionminds-frontend/issues/22)

[[MS-5] - USER STORY: Commenting tools](https://github.com/DennisSchenkel/sessionminds-frontend/issues/28)

[[MS-6] - USER STORY: Search feature](https://github.com/DennisSchenkel/sessionminds-frontend/issues/33)

### Tasks

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

#### Modules & Libraries

- [Emoji Picker React (v4)](https://www.npmjs.com/package/emoji-picker-react?activeTab=readme)

#### Programs & Tools

svglogomaker.org for logo creation

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
