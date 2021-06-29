<a href="https://daily-planner101.herokuapp.com" target="_blank"><img src="https://res.cloudinary.com/food-channel/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.5/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Either you run the day or the day runs you.,w_0.5,y_0.18/v1624626964/amy-humphries-2M_sDJ_agvs-unsplash_vyjljj.jpg" alt="Daily Planner"></a>
# Daily Planner
### Third Milestone Project 

<p><strong>Daily Planner </strong> is a personal web application for those who loves to organize their daily plan, 
where users can register, log-in, create, read, update, delete and search created their plan</p>

<p>Inspired by my boyfriend who's very old school and who still write down his plan with the use of paper and pen. I find it difficult for me to 
see him still using the old fashioned way so I have decided to create an app with a simple, clean and user friendly design.</p>

[View the live project here](https://daily-planner101.herokuapp.com)
<hr>

### Table of contents
1. [UX](#UX)
     1. [Project Goals](#Project-Goals)
     2. [User Stories](#User-Stories)
     3. [Development Planes](#Development-Planes)
2. [Data Schema](#Data-Schema)
     1. [Users Collection](#Users-Collection)
     2. [Recipes Collection](#Recipes-Collection)
     3. [Categories Collection](#Categories-Collection)
3. [Features](#Features)
     1. [Design Features](#Design-Features) 
     2. [Existing Features](#Existing-Features)
     3. [Features to Implement in the future](#Features-to-Implement-in-the-future)
4. [Issues and Bugs](#Issues-and-Bugs)
5. [Technologies Used](#Technologies-Used)
     1. [Languages](#Languages)
     2. [Tools](#Tools)
     3. [Libraries](#Libraries)
     4. [Database Management](#Database-Management)
6. [Testing](#Testing) ☞ **[Testing.md](TESTING.md)**
7. [Deployment](#Deployment)
     1. [1. Database Creation](#1-Database-Creation)
     2. [2. Local Copy Creation](#2-Local-Copy-Creation)
     3. [3. Heroku App Creation](#3-Heroku-App-Creation)
8. [Credits](#Credits)
9. [Acknowledgements](#Acknowledgements)
10. [Technical Support](#Technical-Support)
***

![Daily Planner](image/responsive-img.png)

***
# UX 
## Project Goals
The primary goal of **Daily Planner 101** is to provide a web-based application, that is simplistic and user friendly design, 
that allows users to **create**, **read**, **update**, **delete**, and **search** their plan in one app.

This is the third of Milestone Project that the developer student must complete during their Full Stack Web Development 
Program at The Code Institute and the main requirements is to build a full-stack website allowing users to manage a common dataset using 
**HTML5**, **CSS3**, **JavaScript**, **Python**, **Flask** and **MongoDB**.

#### User Goals
The user is looking for:
- A searchable database.
- Create a user account.
- An easy-to-use dataset management system with **CRUD** conventions to:

    - Create plan.
    - Read plan.
    - Update the plan.
    - Delete created plan.


#### Developer / Site Owner Goals
The Developer is looking to:

- Create a user-friendly application that they themselves would use for organizing their daily tasks .
- Demonstrate their proficiency in a variety of software development skills, using newly learned languages and libraries as well as a document database system.
- Deploy a project they are proud of, and excited to have, on their portfolio.


## User Stories
**As a General User, I want to:**

1. Create, Read, Update, Delete daily plan and find them on the database. 
2. View the selected plan dashboard to get necessary information.
3. Provide links to stay connected with the developer or an app made.

**As a Non-Registered User, I want to:**

1. Navigate to Sign-Up page to Register an account.

**As a Registered User, I want to:**

1. Log into my account to access to the full functionality of the planner.
2. Navigate to my planner page to view tasks.
3. Creat a task .
4. View my plans to edit task as needed.
5. View my plans to delete task.


**As an Admin, I want to:**

1. View Manage Plan button and should be to visible to admin.
2. Add categories, Edit and Delete them.


## Development Planes

***1. Strategy Plane*** 

The web app is being developed to be used as daily basis specially for organized. 
It is suitable for all gender and for all ages. It broken into three categories which focused on the following target audiences:
- **Roles:**
     - New Users (Non-Registered)
     - Returning Users (Registered)
     - Admin (Site Management)

The website needs to enable the user to:
- Register/Login to an account
- Create plan
- Search Plan created in the database 
- View created Plan with the following information:
    - Plan Category
    - Plan 
    - Plan Description
    - Plan Date
    - Time
    - Created by:

- Save and access their created plan
- Stay connected with the app through social links
- Button to go back to top
- Testimonials for user feedback


***2. Scope Plane*** 

A scope was defined to identify what needed to be done in order to align features with the strategy previously defined. This was broken into two categories:
- **Content Requirements**
     - The user will be looking for:
        - Creating an account:
            - Custom Username/Password
            - Create their own Plan
            - Manage their own Plan
        - Easy Navigation
        - Aesthetic and identifiable theme
        - My Plan dashboard
        - Searchable database system
        - Site Social links

- **Functionality Requirements**
     - The user will be able to:
        - Register/Login to account
        - Create their profile:
            - Customise Username/Password
            - Edit and Delete their account
            - Create their own Plan
            - Edit and delete their Plan
            - Save Plan
        - Navigate to their plan:
            - Search engine
            - My Plan Page
        - Create their plan, providing:
            - Plan Category
            - Plan 
            - Plan Description
            - Plan Date
            - Time
            - Created by:
        - Stay connected with site
            - Social links

***3. Structure Plane*** 

The information architecture was organized in order to ensure that users could navigate through the site with ease and efficiency, 
with the following results: 



**Information Architecture for User Management:**

***4. Skeleton Plane*** 

Wireframe mockups were created in a [Balsamiq Cloud](https://balsamiq.cloud/sw8ybdy/pnztp2i/r2278) with providing a positive user experience in mind:

![Wireframes](image/wireframe.png)

***5. Surface Plane*** 

- <strong>Colour Scheme</strong>

     - The chosen colour scheme was specifically selected in order to define the tone of the application.

     - A colour palette was developed to create an ambient and familiar environment throughout the site.

     - "COLOORS" is being used for [Color Generator](https://coolors.co/).

     - The selected colours are:

          ![Colour Palette](image/colorscheme.png)

     - Additional colors are simply green and red for the highlight buttons like "Done and Urgent buttons". 


- <strong>Typography</strong>

     - The primary font chosen is [Roboto](https://fonts.google.com/specimen/Roboto#standard-styles). Roboto has a dual nature. 
     It has a mechanical skeleton and the forms are largely geometric. At the same time, the font features friendly and open curves. 
     While some grotesks distort their letterforms to force a rigid rhythm, Roboto doesn’t compromise, allowing letters to be settled 
     into their natural width. This makes for a more natural reading rhythm more commonly found in humanist and serif types. 
     This is the stardard font type of "Materialize". I also made sure that it wont complicate throughout application.

- <strong>Imagery</strong>

     - The imagery chosen are from [Unsplash](https://unsplash.com/) in order to create a consistency of the app while maintaining the 
     look and feel of the application. 
     - I have used [Cloudinary](https://cloudinary.com/) and apply it to connect with the images used. I have input text as well on the 
     banner image in which the app would love to emphasize and the purpose of it is to motivate the user as well.
        - ![Banner Image](image/template_primary.jpeg) by Amy Humphries
        - ![Landing Image](image/cathryn-lavery-fMD_Cru6OTk-unsplash.jpg) by Cathryn Lavery


[Back to top ⇧](#table-of-contents)
