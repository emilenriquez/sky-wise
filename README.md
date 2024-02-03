# Weather Forecast

a simple application with ReactJS and then demonstrate it running
natively in a web browser.

## Use Cases
```
- Anonymous users i.e. users who are not authenticated can view a
“Hello, World!” landing page with a welcome message and a login
button.

- User cannot access the other pages/screen without first logging in
- User login using their GitHub credentials
- OAuth2 / OIDC authentication
- User views the default Home Screen as defined below
  - User’s name is displayed
  - User’s github page URL is displayed
  - User has a text field to enter their current city and can click a
      button that causes the weather page/screen to open
- The user views the weather in the specified location
  - City name can be entered and is used to display weather

Uses the following weather API https://openweathermap.org/forecast16#geo16

f. User can navigate between three pages/screens
i. Landing Screen
ii. Home Screen
iii. Weather Screen
g. Navigation can either be side or top bar.
h. Home and Weather screen are only accessible when logged in. When
the user logs out again the Landing Screen with the login button is
displayed again.
```

## ROUTES
- **"/"** = `Landing Page or Home Screen Displays a welcome message and provide a login button`
- **"/home"** =
  ```
    * Display the user's name and a link to their github page
    * Display a text field and button which, when clicked, display's the weather at the city entered in the text field i..e opens up the weather screen.
    * This should be a protected route. If the user has not logged in with GitHub, they should not be able to access this page/screen.
  ```
- **"/weather"** = `Use the city name to fetch the weather forecast from one of the following APIs`





## Technologies Used
*This Repo uses the following technologies:*

- *Tailwind CSS*: It utilizes the Tailwind CSS framework for styling the user interface, ensuring a responsive and visually appealing design.
- *Dark Mode Switching*: The application implements a dark mode switching feature, allowing users to toggle between light and dark themes according to their preference.
- *Hydration Handling*: Weather App manages server-side and client-side hydration, ensuring optimal rendering and performance during both initial and subsequent visits.
- *React Query*: The application employs React Query as a data-fetching and state management library, simplifying the handling of asynchronous data and improving the overall user experience.



## COLORS:
https://davidpiesse.github.io/tailwind-md-colours/





----------------------
# -----------------------      NextJS 13        --------------------------

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Authentication
![auth_structure](/assets/auth_structure.png)

The external API has an authentication endpoint POST /api/auth/login which accepts a username and password pair in the request body. If authentication was successful, the request to the external API will send a 200 status response, otherwise a 4xx response.


---------------------------------------------------

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.




