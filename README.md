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
* 05-Three Attributes of Component Instance
  * state
    - Use of state
    - Simple Form of Coding
    - Summary of state
  * props
    - Use of props
    - Restriction of props
    - Simple Form of Coding
    - Props in Functional Components
  * refs
    - ref as a string
  

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
#### Use of state
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

##### Page Display
![Suny](./Images/Suny.jpg)  ![Windy](./Images/Windy.jpg)

Every time the element is clicked, React will re-render the component to the page


#### Simple Encoding of state
```jsx
// 1. Create a class component of React
class Weather extends React.Component {

    render() {
        return (
            <h1 onClick={this.changeWeather}>
                It's {this.state.isSuny ? 'suny' : 'windy'} today
            </h1>
        )
    }

    // Initialization of state
    state = { isSuny: true }

    // Custom method - use the form of assignment statement + arrow function.
    changeWeather = () => {
        const isSuny = this.state.isSuny
        this.setState({ isSuny: !isSuny })
    }

}

// 2. Render the component to the page
ReactDOM.render(<Weather />, document.querySelector('#test'))    
```


#### Summary of state
1. 'state' is the most important attribute of the component object, and its value is an object (a combination of multiple key-value pairs).
2. Components are referred to as "state machines." By updating the component's state, the corresponding page display is updated (re-rendering the component).
3. 'this' in the render method in the component is the component instance object.
4. How to solve the 'this' of the custom method in the component is undefined
   - Mandatory binding 'this': through the bind() of the function object.
   - Arrow function.
5. State data: Cannot be modified or updated directly in the 'state'


### props
#### Use of props
```jsx
class Person extends React.Component {

    render() {
        console.log(this);
        return (
            <ul>
                <li>Name: {this.props.name}</li>
                <li>Gender: {this.props.gender}</li>
                <li>Age: {this.props.age}</li>
            </ul>
        )
    }
}

// method 1
ReactDOM.render(<Person name="Olivia" gender="Male" age={19} />, document.querySelector('#test1'))
ReactDOM.render(<Person name="Noah" gender="Male" age="20" />, document.querySelector('#test2'))
ReactDOM.render(<Person name="Aiden" gender="Male" age="21" />, document.querySelector('#test3'))

// method 2
const data = { name: "Sophia", gender: "female", age: "22" }
// React and Babel allow the use of the spread operator to expand an object, but it can only be used in tag attributes.
ReactDOM.render(<Person {...data} />, document.querySelector('#test4'))
```

In React, props (short for "properties") are a special object used to pass data and functions from one component to another. They provide inputs for components, allowing for flexibility in reuse and configuration. Data flows unidirectionally through props, typically from parent to child components. Moreover, props are read-only, meaning a component cannot modify the props it receives.

1. **Definition**: In React, props stand for "properties." They are a mechanism for passing data from parent to child components.

2. **Passing Data**: When defining a child component within a parent component's render method (or return statement in functional components), you can pass down values or functions as props. For example, <ChildComponent someProp={value} /> passes a someProp prop to ChildComponent with the value of value.

3. **Accessing in Child Component**: Within the child component, props can be accessed as an object. For example, if you pass a prop named someProp, you can access it in the child component as this.props.someProp in class components or props.someProp in functional components.

4. **Read-Only Nature**: It's crucial to understand that props are read-only. This means that a child component should not modify the props it receives.

5. **Passing Functions as Props**: To allow child components to communicate back to their parent, functions can be passed down as props. When the child invokes this function, it can effectively send data back to the parent or notify it of events.

6. **Default Props**: Components can define default values for props using the defaultProps property. This ensures that even if a particular prop isn't provided by the parent, the component will still have a value to use.

7. **Props Validation**: To ensure that components receive the right type of data, you can use propTypes. This allows you to specify the data type of each prop and whether it's required or optional.

8. **Special Prop - children**: React has a special prop named children that's used to pass elements or components as the content between the opening and closing tags of a component. For instance, in <ParentComponent><ChildComponent /></ParentComponent>, ChildComponent is passed to ParentComponent as the children prop.

9. **Destructuring Props**: In functional components, it's common to destructure props in the parameter list for cleaner and more concise code. For example, instead of (props) => {...}, you might see ({ someProp, anotherProp }) => {...}.

In summary, props in React provide a robust mechanism for parent-child communication, ensuring that components remain reusable and maintainable by keeping them unaware of the overall app's intricate state management. They allow for a clear, top-down data flow structure, which is central to React's component-based architecture.

#### Restriction of props
Introduce React Library - prop-types.js
```html
<!-- Import 'prop-types.js' to impose restrictions on component tag attributes. -->
<script type="text/javascript" src="../../React.JS/prop-types.js"></script>

```
Example
```jsx
class Person extends React.Component {

    render() {
        console.log(this);
        return (
            <ul>
                <li>Name: {this.props.name}</li>
                <li>Gender: {this.props.gender}</li>
                <li>Age: {this.props.age}</li>
            </ul>
        )
    }
}

// Restrict the type and necessity of the attributes of the component tag
Person.propTypes = {
    // Restrict the 'name' attribute to a string type and must be passed in
    name: PropTypes.string.isRequired,
    // Restrict the 'gender' attribute to a string type
    gender: PropTypes.string,
    // Restrict the 'age' attribute to a numeric type
    age: PropTypes.number,
    // Restrict 'doSpeak' attribute to function type
    speak: PropTypes.func
}

// Specifies the default value for a label attribute
Person.defaultProps = {
    // Specifies that the default value for the 'gender' attribute is 'Male'
    gender: "Male"
}

function doSpeak(){
    console.log("doSpeak function");
}

ReactDOM.render(<Person name="Olivia" gender="Male" age={19} speak={doSpeak} />, document.querySelector('#test1'))

```

1. Use the PropTypes object to limit the necessity of property types and attributes. When restricting the type of an attribute to a function, use func as a keyword.
2. Use defaultProps to specify default values for properties.

#### Simple Form of Coding
```jsx
class Person extends React.Component {

    render() {
        // Call the function passed in through the props attribute
        this.props.speak()
        return (
            <ul>
                <li>Name: {this.props.name}</li>
                <li>Gender: {this.props.gender}</li>
                <li>Age: {this.props.age}</li>
            </ul>
        )
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        gender: PropTypes.string,
        age: PropTypes.number,
        doSpeak: PropTypes.func
    }

    static defaultProps = {
        gender: "Male"
    }

}

function doSpeak() {
    console.log("doSpeak function");
}

ReactDOM.render(<Person name="Olivia" gender="Male" age={19} speak={doSpeak} />, document.querySelector('#test1'))

```
Generally, in React, the constructor is used for the following two cases:
1. Initializing the internal state by assigning an object to this.state.
2. Binding instances for event handling functions.


#### Props in Functional Components
```jsx
/* 
    props is also an object in functional components
*/
function Person(props) {
    const { name, gender, age } = props
    return (
        <ul>
            <li>Name: {props.name}</li>
            <li>Gender: {gender}</li>
            <li>Age: {age}</li>
        </ul>
    )
}

// Restrict the type and necessity of the attributes of the component tag
Person.propTypes = {
    // Restrict the 'name' attribute to a string type and must be passed in
    name: PropTypes.string.isRequired,
    // Restrict the 'gender' attribute to a string type
    gender: PropTypes.string,
    // Restrict the 'age' attribute to a numeric type
    age: PropTypes.number,
    // Restrict 'doSpeak' attribute to function type
    speak: PropTypes.func
}

// Specifies the default value for a label attribute
Person.defaultProps = {
    // Specifies that the default value for the 'gender' attribute is 'Male'
    gender: "Male"
}

ReactDOM.render(<Person name="Olivia" gender="Male" age={19} />, document.querySelector('#test1'))

```
Using props in functional components
1. "propTypes" and "defaultProps" cannot be written within the body of a functional component, they can only be defined externally.
2.  'props' is also an object in functional components


### refs
Refs (short for references) are a mechanism in React used to access DOM elements or component instances. They allow direct access to underlying DOM nodes or component instances within a React component, enabling specific operations to be performed. Refs can be utilized in the following scenarios:
1. **Accessing DOM Elements**: Through refs, you can obtain references to DOM elements and directly manipulate the DOM as needed. This could involve tasks such as managing focus, measuring element dimensions, adding or removing CSS classes, and more.

2. **Accessing Component Instances**: Refs enable access to instances of React components. This can be useful for invoking component methods, accessing component state or props, and handling certain low-level logic.

3. **Instance Variables in Class Components**: Refs can also be used to store and access instance variables within class components. These variables can hold component state and track specific information throughout the component's lifecycle.

#### ref as a string
```jsx
class Demo extends React.Component {
    render() {
        console.log(this)
        return (
            <div>
                <input ref="input1" type="text" placeholder="Click the button to prompt the data" />
                <button onClick={this.showData1}>Click</button><br />
                <input ref="input2" onBlur={this.showData2} type="text" placeholder="Lost focus prompt data" /><br />
            </div>
        )
    }

    showData1 = () => {
        console.log(this)
        // output: <input type="text" placeholder="Click the button to prompt the data">
        console.log(this.refs.input1)
        console.log(this.refs.input1.value)
    }

    
    showData2 = () => {
        console.log(this)
        // output: <input type="text" placeholder="Lost focus prompt data">
        console.log(this.refs.input2)
        console.log(this.refs.input2.value)
    }
}

ReactDOM.render(<Demo />, document.querySelector('#test'))
```
In React, you can use string-based refs to reference DOM elements within a component. This is **an older approach**, while the more common methods nowadays involve using callback refs or React's createRef API.

With string-based refs, we can add a ref attribute to a JSX element in a component and then access that DOM element using this.refs. However, this approach is no longer recommended by the official documentation, as it can lead to code that is harder to maintain in certain cases.

#### ref in callback form
```jsx
class Demo extends React.Component {

    render() {
        console.log(this)
        return (
            <div>
                <input ref={currentNode => this.input1 = currentNode} type="text" placeholder="Click the button to prompt the data" />
                <button onClick={this.showData1}>Click</button><br />
                <input ref={this.callbackRef} onBlur={this.showData2} type="text" placeholder="Lost focus prompt data" /><br />
            </div>
        )
    }

    callbackRef = (currentNode) => {
        this.input2 = currentNode
    }

    showData1 = () => {
        const { input1 } = this
        console.log(input1.value)
    }


    showData2 = () => {
        const { input2 } = this
        console.log(input2.value)
    }
}

ReactDOM.render(<Demo />, document.querySelector('#test'))
```
In React, a callback-style Ref is a way to get a reference to a DOM element or component instance via a callback function. This approach largely replaces the older string-based Ref, which provides greater flexibility and control.

#### The use of createRef() function
```jsx
class Demo extends React.Component {
    /* 
        After calling React.creatRef(), a container can be returned, which can store the node identified by ref
    */
    myRef_input1 = React.createRef()
    myRef_input2 = React.createRef()

    render() {
        console.log(this)
        return (
            <div>
                <input ref={this.myRef_input1} type="text" placeholder="Click the button to prompt the data" />
                <button onClick={this.showData1}>Click</button><br />
                <input ref={this.myRef_input2} onBlur={this.showData2} type="text" placeholder="Lost focus prompt data" /><br />
            </div>
        )
    }

    showData1 = () => {
        console.log(this.myRef_input1)
        console.log(this.myRef_input1.current);
        console.log(this.myRef_input1.current.value);
    }


    showData2 = () => {
        console.log(this.myRef)
        console.log(this.myRef_input2.current);
        console.log(this.myRef_input2.current.value);
    }
}

ReactDOM.render(<Demo />, document.querySelector('#test'))
```
After calling React.creatRef(), a container can be returned, which can store the node identified by ref.