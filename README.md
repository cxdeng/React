# React

## This is an self-taught Learn React Project

* 01-Hello React
* 02-Virtual DOM
  - Using JSX
  - Using JavaScript
* 03-JavaScript XML
  - Rules of JavaScript XML
  - practice
* 04-The Definition of Component
  - Functional Component
  - Class Component
  

## 01-Hello React
### Introduce React Library
```javascript
<!-- Introduce React Core Library -->
 <script type="text/javascript" src="../React.JS/react.development.js"></script>
<!-- Introduce react-dom to support react to operate dom -->
<script type="text/javascript" src="../React.JS/react-dom.development.js"></script>
<!-- Introduce babel to convert JSX to JavaScript -->
<script type="text/javascript" src="../React.JS/babel.min.js"></script>
```

### Example
```html
<body>
    <!-- Prepare a container -->
    <div id="test"></div>

    <script type="text/babel">
        // 1. Create a virtual DOM
        const VDOM = <h1>Hello, React</h1>
        // 2. Render the virtual DOM to the page
        ReactDOM.render(VDOM, document.querySelector('#test'))
    </script>
</body>
```

## 02-Create Virtual DOM
### Using JSX to create virtual DOM
```javascript
// 1. Create a virtual DOM using JSX
const VDOM = (
    <h1 id="title">
        <span>Hello, React</span>
    </h1>
)
// 2. Render the virtual DOM to the page
ReactDOM.render(VDOM, document.querySelector('#test'))
```

### Using JavaScript to create virtual DOM
```javascript
 // 1. Create a virtual DOM using JavaScript
const VDOM = React.createElement("h1", {id:"title", class:"title-class"}, React.createElement("span", {}, "Hello, React"))
// 2. Render the virtual DOM to the page
ReactDOM.render(VDOM, document.querySelector('#test'))
```

### Comparison of virtual DOM and real DOM
In React, the Virtual DOM and Real DOM are two core concepts with distinct differences.

#### Definition:

* **Real DOM**: It's the actual elements present on the web page that one can directly interact with. When operated upon, it often involves direct DOM API calls, like document.getElementById().
* Virtual DOM: This is a programming concept used in React that serves as a lightweight representation of the real DOM tree. It exists in memory and acts as an abstract representation of the DOM.

#### Update Efficiency:

* **Real DOM**: Operations are typically expensive. Any change made to the real DOM might lead to the browser recalculating layout, repainting, and compositing, which can be time-consuming.
* **Virtual DOM**: Updates are rapid as it's just a JavaScript object in memory.

#### Optimization Strategy:

* **Real DOM**: Lacks built-in differential calculation or optimization.
* **Virtual DOM**: React employs the Virtual DOM to track changes in the DOM. When a component's state changes, React creates a new Virtual DOM and compares it to the previous version (a process called "diffing"). Once differences are determined, React updates the relevant parts of the actual DOM efficiently.

#### Type of Operations:

* **Real DOM**: Direct, often destructive changes.
* **Virtual DOM**: Indirect, with no immediate alterations to the actual DOM.

#### Resource Consumption:

* **Real DOM**: Operations are usually heavier as they involve direct browser DOM API interactions and possible reflows/repaints.
* **Virtual DOM**: Less resource-intensive since operations are in memory, but there's additional computation required for the differential calculation between the Virtual DOM and the old Virtual DOM.

#### Direct Manipulations & API:

* **Real DOM**: Operated directly using JavaScript, for instance, document.createElement().
* **Virtual DOM**: In React, you usually don't interact with the Virtual DOM directly; instead, you declare the state of the UI, and React takes care of managing the Virtual DOM.

Through the Virtual DOM, React achieves efficient updates to the DOM, preventing unnecessary real DOM manipulations, thereby enhancing the performance of web applications.


## 03-Grammar Rules of JavaScript XML
```javascript
const myId = 'title'
const myData = 'Hello, React'

// 1. Create a virtual DOM using JavaScript
const VDOM = (
    <h1 className="title" id="{myId}">
        <span style={{fontWeight:'bolder'}}>{myData}</span>
    </h1>
)

// 2. Render the virtual DOM to the page
ReactDOM.render(VDOM, document.querySelector('#test'))
```

### Rules of JavaScript XML
* When defining the Virtual DOM, do not use quotes.
* Use {} to embed JavaScript expressions within tags.
* Do not use the class keyword to specify class names for styles; instead, use the keyword className.
* For inline styles, use the format style={{key:value}}.
* The Virtual DOM can only have one root tag.
* Tags must be closed.
* For the first character of a tag:
  1. If it starts with a lowercase letter, the tag is converted into an element with the same name in HTML. If there is no corresponding element with the same name in HTML, an error is thrown.
  2. If it starts with an uppercase letter, React will render the corresponding component. If the component is not defined, an error is thrown.

#### Page Display
![Page Display of Rules of JSX](./Images/Rules%20of%20JSX.jpg)

### JavaScript XML Practice
```jsx
const title = 'JavaScript XML Practice'
const data = ['React', 'Angular', 'Vue']

// 1. Create a virtual DOM
const VDOM = (
    <div>
        <h1>{title}</h1>
        <ul>
            {
                // There is a problem with the index here
                data.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
    </div>
)

// 2. Render the virtual DOM to the page
ReactDOM.render(VDOM, document.querySelector('#test'))
```

#### Page Display
![Page Display of The Practice](./Images/JSX%20Practice.jpg)


## 04-Define React Component
### Functional Component
```javascript
// 1. Create a functional component of React
function MyComponent() {
    return <h2>I'm a simple component defined with a function</h2>
}
// 2. Render the component to the page
ReactDOM.render(<MyComponent/>, document.querySelector('#test'))
```
After executing ReactDOM.render()
1. React parses the component tag and finds the MyComponent component.
2. It notices the component is defined using a function. It then calls that function, converts the returned virtual DOM to real DOM, and then displays it on the page.

### Class Component
```jsx
// 1. Create a class component of React
class MyComponent extends React.Component {
    render() {
        return (
            <h2>I'm a complex component defined with a class</h2>
        )
    }
}

// 2. Render the component to the page
 ReactDOM.render(<MyComponent/>, document.querySelector('#test'))
```
After executing ReactDOM.render()
1. React parses the component tag and finds the MyComponent component.
2. It was found that the component is defined using a class. Subsequently, an instance of this class is created, and the render method on its prototype is invoked through this instance.
3. Convert the returned virtual DOM to the actual DOM, and then render it on the page.

## 05-Three Attributes of Component Instance
### state
```jsx
// Create a class component of React
class Weather extends React.Component {
    constructor(props) {
        super(props)
        // Initialization state
        this.state = { isSuny: true }
        // Solve the problem pointed to by 'this' in the changeWeather function
        this.func = this.changeWeather.bind(this)
    }

    render() {
        return (
            <h1 onClick={this.func}>It's {this.state.isSuny ? 'suny' : 'windy'} today</h1>
        )
    }

    /* 
        The methods defined in the class automatically enable strict mode.
        Since func is used as the callback function of onClick, func is not called through the instance, but called directly.
    */
    changeWeather() {
        /* 
            The 'state' cannot be modified directly, it needs to be updated using the built-in API setState(), and the update is a kind of merger rather than replacement
        */
        const isSuny = this.state.isSuny
        this.setState({ isSuny: !isSuny })
        console.log(!this.state.isSuny);
    }
}

// Render the component to the page
ReactDOM.render(<Weather />, document.querySelector('#test'))  
```
1. Initialization state: ```this.state = { key: value }```
2. Solve the problem pointed to by 'this' in the changeWeather function: ```(this.func = this.func.bind(this))```
3. The methods defined in the class automatically enable strict mode.
4. Since func is used as the callback function of onClick, func is not called through the instance, but called directly.
5. The 'state' cannot be modified directly, it needs to be updated using the built-in API setState(), and the update is a kind of merger rather than replacement

#### Display
![Suny](./Images/Suny.jpg)  ![Windy](./Images/Windy.jpg)

Every time the element is clicked, React will re-render the component to the page