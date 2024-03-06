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




fix request waterfall: initiate data requests at the same time
in js: Promise.all() or Promise.allSettled()


Cookies and URL search params can only be known at request time.
static and dynamic behavior


### Streaming
https://nextjs.org/learn/dashboard-app/streaming
- experience
- content priority
- component rely on data fetching?

wrapper component suspense to render individual components.
use data fetches at the component where it's needed reduces dependency of other components to render.


Summary
https://nextjs.org/learn/dashboard-app/partial-prerendering

## Search and Pagination
### URL search params
https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
Search (URL search params) with Next.js client hooks
- useSearchParams
Web API **urlSearchparams**: manipulating the URL query parameters instead of using complex string literals
- usePathname
- useRouter

Capture the user's input.
Update the URL with the search params.
Keep the URL in sync with the input field.
Update the table to reflect the search query.

The URL is updated without reloading the page, thanks to Next.js's client-side navigation

useSearchParams() hook vs. the searchParams prop
When reading the params from the client, use the useSearchParams() to avoid go back to the server
instead of working with client-side React using URL search params and lifting this state to the server
- shareble & bookmarkable
- Server-Side Rendering and Initial Load
- Analytics and Tracking

#### Debouncing: 
limits the rate at which a function can fire ->
It prevents a new database query on every keystroke
// only query database when user stopped typing
npm i use-debounce (library)
avoiding this:
A
AM
AMY

### Pagination 
fetchFilteredInvoices() returns 6
https://nextjs.org/learn/dashboard-app/adding-search-and-pagination

fetchInvoicesPages returns the total number of pages based on the search query

## Mutating Data
Server actions: security through techniques like POST requests, encrypted closures, strict input checks, error message hashing, and host restrictions
invoking a Server Action within a Server Component is **progressive enhancement** - forms work even if JavaScript is disabled on the client

'use server';// react directive -> marking all the exported functions within the file as server functions
 These server functions can then be imported into Client and Server components, making them extremely versatile
 form: Server Actions create a POST API endpoint
 forms that have many fields use method with JavaScript's Object.fromEntries()
 like:
 ``
 const rawFormData = Object.fromEntries(formData.entries())
``
