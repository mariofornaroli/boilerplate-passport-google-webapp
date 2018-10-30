# boilerplate.be-passport-google-webapp

Node.js web-api boilerplate with Passport authentication, Express, MongoDB and Mongoose

### Prerequisites

Make sure you have these installed on your machine

* [Node.js](https://nodejs.org/en/download/)
* [MongoDB](https://www.mongodb.com)
* [nodemon](https://nodemon.io/)
* **npm** This comes with Node.js, but make sure you check if you have it anyway

Add ./config/keys.js files with the following code:

module.exports = {
    google: {
        clientID:'<your google client id>',
        clientSecret: '<your google client secret>'
    },
    mongodb: {
        dbURI: '<your mongodb connection string>'
    }
};


### Installing packages

Install packages

```
npm i
```

### Running the app

To run the app (dev. mode)

```
npm start
```

## Built With

* [Node.js](https://nodejs.org) - The backend framework used
* [Express.js](https://github.com/expressjs/express) - Node.js framework used
* [MongoDB](https://www.mongodb.com/) - Database platform used
* [Passport](http://www.passportjs.org/) - Simple, unobtrusive authentication for Node.js


## Authors

* **Mario Fornaroli**
