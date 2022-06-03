# Vite-React
This is a boilerplate React app with Vite instead of create-react-app.
it results in a smaller bundle size and faster performance. Plus it is
pre-loaded with a bunch of extra goodies and is still smaller in
comparison to create-react-app

## Included With Vite-React
- WindiCSS
- React Router
- React Icons
- Typescript Support

## How to use
To get started simply clone the repo replacing \<project_name\> with any
name you desire:

```sh
$> git clone https://github.com/Bitlatte/vite-react.git <project_name>
```

then cd into the new directory and run the following commands:

```sh
$> npm install
$> npm run dev
```

Once you have completed those steps you should have a development server
running on port 3000 on your local machine and you're ready to start
developing your project!

#### Example
```sh
$> git clone https://github.com/Bitlatte/vite-react.git example
$> cd example
$> npm install
$> npm run dev
```

#### Notice
If you plan on pushing your code to your own repo then you need to update the
git remote by using the following commands replacing the repository and username
with your username and the repository you wish to push the code to:

```sh
$> git remote rm origin
$> git remote add origin https://github.com/<username>/<repository>.git
```

## TypeScript
By default this project has TypeScript support. It is best practice to
use TypeScript since it provides amazing type checking to make sure
your code is as error free as possible before shipping to production.