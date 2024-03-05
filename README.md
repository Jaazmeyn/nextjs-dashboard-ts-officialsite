## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

https://nextjs.org/learn/dashboard-app/getting-started

1. npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"

bug: delete node modules and jsonlockfile and npm cache clean --force
then npm install
npm run dev  

## styling
https://nextjs.org/learn/dashboard-app/css-styling
Tailwind and CSS modules

add a global CSS:

again for tailwind inline declerations the extention tailwind css intellicence

CSS Modules allow you to scope CSS


### Using the clsx library to toggle class names
https://nextjs.org/learn/dashboard-app/css-styling#using-the-clsx-library-to-toggle-class-names

You can use clsx to conditionally apply toggle if clicked different color.
aditionally style with Sass what allows to import scss or css
or
CSS-in-JS libraries such as styled-jsx, styled-components, and emotion

### Optimizing Fonts and Images
https://nextjs.org/learn/dashboard-app/optimizing-fonts-images
against fonts, layout shift:

### Create a Postgres database
on vercel after deploying the project
copy the secret key in the .env 

install the Vercel Postgres SDK
``
npm i @vercel/postgres
``

seed database:
 'seeding' in the context of databases is to Populate the database with an initial set of data
 https://nextjs.org/learn/dashboard-app/setting-up-your-database



 In Next.js, you can create API endpoints using Route Handlers.
 When you're creating a full-stack application, you'll also need to write logic to interact with your database. Access relational database (Postgres) with SQL, or an ORM(bridge between db and object-oriented program) like Prisma

 Eine relationale Datenbank ist eine Sammlung von Datenelementen mit vordefinierten Beziehungen

Arten 
Api layer
Database queries

 in next.js Fetching data with React Server Components

 SQL allows to Fetch and manipulate specific data