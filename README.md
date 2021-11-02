# PROJECT 4 README <!-- omit in toc -->



- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

RAM-RAM DeLuxe is a React and Ruby on Rails build that is decision based adventure game. At home screen it will Welcome any visitor with a small description about the game. The home screen will also display a navigation bar with a Sign up/Sign in link as well as a forums link. Once you sign up for an account, you will be prompted to the login screen to login to your profile. Once logged in you now would be able to create an avatar and begin playing the game or head to the forums page and post something you want. In the game each scenario will have four decisions. Where some will prompt you to instant death and take you to a death screen, or proceed you further into the game.  


<br>

## MVP

- Home screen with functional navigation bar 
- Forums page with full CRUD
- Sign up / Sign in page that creates an account and assigns jwt
- Have functional dialogue that transitions after every choice selection
- Have certian scenarios that can prompt the current player to instant death
- Have the player assigned a rank at death or at completion of chapter
- Chapter one must be complete
- Basic css outline

<br>

### Goals

- Creating much more organized code
- Create a interactive game that can recieve feedback
- Create a interactive game that can recieve feedback
- Improving CSS Skills 
- Further my knowledge in REACT
- Learning more about Ruby on Rails and possible additions to add to project
- Becoming more keen at troubleshooting/errorhandling

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front End Logic/Framework                  |
| React Router Dom | Redirections/Transfering to other pages    |
|       JWT        | To assign a unique value to each user      |
|      Axios       | To create read/post/update/delete requests |
|      Bcrypt      | For Password hashing / Security            |
|      CORS        | API handling / Secuirty                    |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Home Page](https://i.ibb.co/TrWQHZq/Screen-Shot-2021-11-02-at-2-31-27-PM.png)

- Desktop Landing

![Login Page](https://i.ibb.co/5Rd1LyX/Screen-Shot-2021-11-02-at-2-32-08-PM.png)

- Login

![Sign up Page](https://i.ibb.co/M1WKsKb/Screen-Shot-2021-11-02-at-2-32-34-PM.png)

- Sign up

![Avatar Name Page](https://i.ibb.co/Cz4070Y/Screen-Shot-2021-11-02-at-2-33-09-PM.png)

- Name Selection

![Chapter Page](https://i.ibb.co/mC2jzp6/Screen-Shot-2021-11-02-at-2-33-34-PM.png)

- Chapter Page

![Death Page](https://i.ibb.co/bNTMSvX/Screen-Shot-2021-11-02-at-2-34-04-PM.png)

- Death Page

![Forum Page](https://i.ibb.co/WNCwMPf/Screen-Shot-2021-11-02-at-2-34-37-PM.png)

- Forum Page

#### Component Tree

[Component Tree Sample](https://i.ibb.co/RQsCjk9/Screen-Shot-2021-11-02-at-2-45-46-PM.png)

#### Component Architecture


``` structure

src
|__ screens/
      |__ Home
      |__ Chapter One
      |__ Forums
      |__ Chapter Two
|__ components/
      |__ NavBar.jsx
|__ services/
      |__ posts.jsx

```

#### Time Estimates


| Component                 | Priority | Estimated Time | Time Invested |
| ------------------------- | :------: | :------------: | :-----------: |
| Proposal                  |    H     |      3hrs      |     0hrs      |
| Backend Setup             |    H     |      3hrs      |     0hrs      |
| NavBar                    |    M     |      2hrs      |     0hrs      |
| Home Page                 |    H     |      3hrs      |     0hrs      |
| Chapter one page          |    H     |      3hrs      |     0hrs      |
| Sign up page              |    M     |      2hrs      |     0hrs      |
| Sign in page              |    M     |      1hr       |     0hr       |
| Death Page                |    M     |      1.5hr     |     0 hr      |
| Home page css             |    H     |      2hrs      |     0 hrs     |
| Chapter one css           |    H     |      3hrs      |     0hrs      |
| Death Page css            |    H     |      3hrs      |     0hr       |
| Forums Page               |    H     |      3hrs      |     0hr       |
| Forums Page css           |    H     |      3hrs      |     0hr       |
| Chapter 2 page            |    L     |      3hrs      |     0hr       |
| Chapter 2 css             |    L     |      2hrs      |     0hr       |
| Advance CSS               |    M     |      3hrs      |     0hr       |
| Story development ch.1    |    H     |      3hrs      |     0hrs      |
| Story development ch.2    |    L     |      3hrs      |     0hrs      |
| Total                     |    H     |      00hrs     |     0hrs      |


<br>

### Server (Back End)

#### ERD Model

[ERD Sample](https://i.ibb.co/g73zTHh/Screen-Shot-2021-11-02-at-10-43-34-AM.png)
<br>

***

## Post-MVP

- Completion Chapters 2 & 3
- Modal for Forums page
- Have images in the background of each dialogue.
- Have a chapter completion at end of chapter
- Background sounds
- Advance/New Css features

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
