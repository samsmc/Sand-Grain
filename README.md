# Sand Grain

## Description
The APP is a platform aimed to those who would like to find the ideal voluntary event and make their life more meaningful helping others.
Sand Grain was developed using back-end dev (Node.js) as part of the [Ironhack](https://www.ironhack.com/) developer bootcamp (WebDev-FT-0920) using a local Data Base and React for the front-end.

## User Stories
- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault .
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup.
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend.
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account.
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account.
- **user profile** - As an user want to see my events, favorites, events added and be able to modify the account details.
- **events** - A user can create new events, edit and delete them. Once creating an event the user becomes the organizer and it is displayed on the event's page. 
- **stars** - As an user you can get stars from the events you participate and become a super voluntary.
- **voluntary level** - Every event you participate will let you earn points to become a super volutary.
- **join/rate** - The user can not only create an event but join the ones created by other users. After participating, the user can rate how the event was and leave a comment.

## Backlog    
- Mark as favorite the events you like the most and save them in your User profile.
- To have the location pointed on the google maps API.

## Wireframe  
<img src="C:/Users/saman/Desktop/3rd Project/wireframe.jpg">

## ROUTES:
# Client / Frontend

## React Router Routes (React App)
| Path                      | Component           | Permissions                 | Behavior                                                     |
| ------------------------- | ------------------- | --------------------------- | ------------------------------------------------------------ |
| `/`                       | HomePage            | public `<Route>`            | Home page                                                    |
| `/signup`                 | SignupPage          | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup |
| `/login`                  | LoginPage           | anon only `<AnonRoute>`     | Login form, link to signup, navigate to homepage after login |
| `/userAccount`            | EventsListPage      | user only `<PrivateRoute>`  | Shows all events in a list                                   |
| `/event/add`              | EventListPage       | user only `<PrivateRoute>`  | Edits an event                                               |
| `/event/:id`              | EventDetailPage     | user only `<PrivateRoute>`  | Details of an event to edit                                  |
| `/event/:id`              | n/a                 | user only `<PrivateRoute>`  | Delete event                                                 |
| `/event/participants`     | ParticipantListPage | user only  `<PrivateRoute>` | List of participants of an event                             |
| `/event/participants/add` | ParticipantListPage | user only `<PrivateRoute>`  | Add a participant to the event                               |


## Components

- LoginPage

- HomePage

- UserPage

- EventListPage

- EventDetailPage

- ParticipantsListPage

- Navbar


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Event Service
  - event.list()
  - event.detail(id)
  - event.add(id)
  - event.delete(id)

# Server / Backend

## Models

User model

```javascript
{
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  address: {type: String},
  phone:{type: String},
  favorites: [Event],
  stars: {type: Number, required: true},
  superVoluntary: {type: Boolean, default: false},
}
```

Event model

```javascript
 {
   name: {type: String, required: true},
   img: {type: String, required: true},
   participants: [{type: Schema.Types.ObjectId,ref:'User'}],
   organizer: [{type: Schema.Types.ObjectId,ref:'User'}],
   description: {type: String, required: true},
   location: {type: String, required: true},
   date: {type: Date, required: true},
   time: {type: Date, required: true},
   category: {type: String, required: true},
   stars: {type: Number, required: true}
 }
```

## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile    `           | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`                | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {email, password}     | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                                            |
| GET         | `/events`           |                              | 200 | 400          | Show all events                                    |
| GET         | `/events/:id`       | {id}                         | 200 | 400 | Show specific event                                 |
| POST        | `/events/add-event` | {name, img, participants, organizer, description, location, date, time, category, stars} | 201            | 400          | Create and save a new event                         |
| PUT         | `/event/edit/:id`   | {name, img, participants} | 200            | 400          | Edit event                                         |
| DELETE      | `/event/delete/:id` | {id}                         | 201            | 400          | Delete event                                       |
| GET         | `/participants`     |                              | 200 | 400          | Show participants                                     |
| POST        | `/events/stars` | {user.id, points}            | 200          | 400          | To add the new points from the event the user participated                         |
| POST        | `/user/evolves` | {user.id}            | 200          | 400          | The user becomes a super voluntary. |


## Links
### Trello (list of tasks)
[Link url](https://trello.com/b/7DkrE05U/sand-grain)

### Github
URls for the project repo and deploy

[Link Repo Server](https://github.com/samsmc/sand-grain-server)

[Link Repo Client](https://github.com/samsmc/Sand-Grain-Client)

[Link Deploy](https://git.heroku.com/sm-photograpy.git)


### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/1NgPJ4H9Rm7cU69o5gxnY8g5n3M_fCEKa1LAlYhyVp6U/edit?usp=sharing)