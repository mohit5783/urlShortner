# Nintex URL Shortner
Creating an assessment for Nintex, for URL Shortening Service. Nintex, Accelerate organization’s digital transformation journey with the next generation of Nintex Workflow Cloud. Put The Power of Process™ into the hands of your ops, IT, process professionals, business analysts, and power users. Start digitizing forms, workflows, and more today. 

[![Build Status](https://travis-ci.com/mohit5783/URLShortner/API.svg?branch=master)](https://travis-ci.com/mohit5783/URLShortner)
[![NPM version](https://img.shields.io/npm/v/URLShortner/API?style=flat-square)](https://img.shields.io/npm/v/URLShortner?style=flat-square)
[![Package size](https://img.shields.io/bundlephobia/min/URLShortner/API)](https://img.shields.io/bundlephobia/min/URLShortner)
[![Dependencies](https://img.shields.io/david/mohit5783/URLShortner/API.svg?style=popout-square)](https://david-dm.org/mohit5783/URLShortner)
[![devDependencies Status](https://david-dm.org/mohit5783/URLShortner/API/dev-status.svg?style=flat-square)](https://david-dm.org/mohit5783/URLShortner?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


---
## Features ✨
* REST API Developed in Node.js using Express.
* Frontend Developed using React.js.
* MongoDB Cloud is used as database.


## Project Setup
### Prerequisites
You will need to have Node.js or Yarn installed in your machine. [[NodeJs](https://nodejs.org/en)] [[YarnPkg](https://yarnpkg.com/)]
You will also need [[PostgreSQL](https://www.postgresql.org/download/)] 
### Database
No need to worry, Developer already taken care of that. The Database is in cloud and is accessible from anywhere. 

### API
Open the command prompt
Letz first reach to the "API" folder using CD
```
> $ cd URLShortner\API
> $ npm install
```
Compiles and hot-reloads for development:
```
> $ npm start
```
This will start the backend server
```
> url-shortner-api@1.0.0 start YourPath\Nintex\URLShortner\API
> nodemon index.js

[nodemon] 2.0.6
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Listening to port 5000

```
This means our server is live on port 5000

### Frontend
Open another command prompt
now reach to the directory named "aa-react-app" 
```
> $ cd cd URLShortner\App 
> $ npm install
```
Compiles and hot-reloads for development:
```
> $ npm start
```
After running this command it will automatically pop out the running application in your favorite browser. If everything goes well, you would see the screen where you have a textbox to enter a Long URL to convert it into Smaller or Short URL.

## Usage 💡
After successful URL Conversion you would be able to see the Short URL below the textbox. 
