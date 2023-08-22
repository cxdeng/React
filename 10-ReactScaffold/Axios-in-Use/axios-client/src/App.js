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