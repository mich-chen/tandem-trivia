# Welcome to Tandem Trivia! :bulb: :video_game:

Tandem trivia is a training trivia app on Tandem knowledge! Users may answer, skip, return to 10 random non-repeating questions and see their final score at the end. Play and train as much as you'd like to master your Tandem knowledge!

## Tech Stack

* React
* JavaScript
* Python
* Flask
* HTML
* CSS

## Features

* Each round of trivia consists of 10 random, non-repeating questions.

* View one question at a time with 4 multiple choice questions

* Upon submitting an answer, correct answer is revealed and choices reflect colors

![start-game](https://user-images.githubusercontent.com/62639321/98421434-2e31aa00-203e-11eb-9653-31263c3b89c7.gif)

* Users may traverse forward and backwards to skip and return to skipped questions.

* Previously submitted questions will reflect user's submission

![show-traversing](https://user-images.githubusercontent.com/62639321/98421450-37227b80-203e-11eb-873a-bbb8e4ceb09e.gif)

* Users may view their score at the end, after completing all 10 questions

* Users may play unlimited amount of times! :) 

![see-score](https://user-images.githubusercontent.com/62639321/98422205-eb70d180-203f-11eb-9adc-1e0dac6a50ad.gif)

## Getting Started

### Clone repository

```
$ git clone https://github.com/mich-chen/tandem-trivia
```

### Package managers

* `npm`
* `pip`

### Setup

In current project directory

For backend:

Create a virtual environment and install requirements

```
$ virtualenv env
$ source env/bin/activate
$ pip3 install -r requirements.txt
```

For frontend:

```
 $ npm install
```

### Running the app

You will need two terminal windows to locally run the app.

**Window one** Run server in virtual environment
```
$ source env/bin/activate
$ python3 server.py
```

**Window two** Run frontend on local computer
```
npm start
```

#### You may now access the app at localhost:5000 and/or localhost:3000

### Running Tests

**Make sure you're in the parent project directory (/Tandem-Apprentice-Challenge-2020)**

#### `python3 runtests.py`

Script to run all Pytest and Unittest files verbosely 


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
