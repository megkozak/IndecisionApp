'use strict';

console.log('app.js is running!');

// JSX - JavaScript XML
var app = {
  title: 'Indecision App!',
  subtitle: 'Put you life in the hands of a computer:'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h2',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

// var user = {
//   name: 'Andrew',
//   age: 26,
//   location: 'Philadelphia'
// };

// var templateTwo = (
//   <div>
//     <h1>{user.name}</h1>
//     <p>Age: {user.age}</p>
//     <p>Location: {user.location}</p>
//   </div>
// );
var appRoot = document.getElementById('app');

// ReactDOM.render(templateTwo, appRoot);

ReactDOM.render(template, appRoot);
