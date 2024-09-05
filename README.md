# Session Minds Documentation

## User Experience

### Design

#### Color Scheme

#### Imagery

To give categories unique icons, emojis have been used. A great resource for finding the correct code was [prosettings.com](https://www.prosettings.com/emoji-list/)

#### Typography

#### Mockups

## Agile Project Management

This project was developed using an agile approach for structuring backend and frontend functionalities, as well as planning and tracking the development process. The project was separated into several milestones, each containing one or multiple user stories, each being structured into several different tasks. Additionally, tasks were divided into frontend (FE) and backend (BE) tasks.

For naming convention, milestones were numbered, starting with 0 for the basic project setup and going up in numbers, based on the logical next development steps. Each User Story was marked with "MS-X", and X standing for the associated milestone. Each task was then marked with (FE) for frontend and (BE) for backend.

The final structure looks like this:

- (MS-1) Profiles
- (MS-1) - USER STORY: User profiles
- (MS-1) - FE - TASK: Profile information page

Each user story and task was also labeled using the MoSCoW methodology with the tags must have, should have, could have and won't have. Also tags for user story, task and draft were used.

### Milestones

### User Stories

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

## Credits

### Code Sources

**Profile App (BE)**

In this project, the Django profile app with its structure is greatly inspired and by part copied from the Code Institute examples, although customized in many places.
