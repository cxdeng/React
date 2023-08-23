# Axios In Use (Client)

Axios is a promise-based HTTP client that works in the browser and Node.js. It's commonly paired with React to make HTTP requests.

Here's how to use Axios with React:

## Install Axios:

Use npm or yarn to install Axios:

```bash
npm install axios
```

or

```bash
yarn add axios
```

## Import Axios to React
```javascript
import axios from 'axios'
```

## Use Axios in React

```javascript
import React from 'react'
import axios from 'axios'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>Click to Get Student Data</button>
      </div>
    )
  }

  getStudentData = () => {
    axios.get('http://localhost:8080/students')
      .then(
        response => {
          console.log("Success", response.data);
        },
        error => {
          console.log("Error", error);
        }
    )
  }
}
```

