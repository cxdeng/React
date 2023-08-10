# React

## This is an self-taught Learn React Project

* 01-Hello React
* 02-Virtual DOM
  - Using JSX
  - Using JavaScript

## Hello React
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

## Create Virtual DOM
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

### Using JavaScript to create virtual DOm
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