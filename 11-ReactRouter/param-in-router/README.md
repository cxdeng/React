# Routing Component

## The Difference Between Routing Component and Regular Component

### Route Components

1. Definition: These components are usually associated with a specific route. When the application's URL matches a certain path, the corresponding route component is rendered.

2. Origin: When using a routing library like react-router-dom, route components are associated directly with the <Route> component.

3. Characteristics:

   - Typically have access to routing parameters such as the match, location, and history objects.
   - Usually responsible for page layout, data fetching, or other page-level logic.
   - As they're associated with URLs, they're typically more closely tied to the overall navigation and structure of the app.

**Example**

```jsx
import { Route } from 'react-router-dom';

<Route path="/about" component={AboutPage} />
```

In the above code, AboutPage is a route component. When users navigate to the "/about" path, the AboutPage component is rendered.

### Regular (or UI) Components:

1. Definition: These are the standard components in the app that help construct the UI and functionalities. They might be parts of a page, such as a button, a list, a header, etc.

2. Characteristics:

   - Typically not directly related to routing, so they don't have direct access to routing parameters.
   - Are more focused on UI and presentation; they might contain state or logic but not routing-related logic.
   - Highly reusable as they are usually smaller and more focused.

An example would be a simple Button component or a Navbar component.

### Summary

The primary distinction between these two types of components lies in their responsibilities and uses:

- Route Components are larger components associated with specific URLs, usually responsible for overall page layouts and data fetching.

- Regular Components are smaller, more focused, and mainly used to build out the UI parts of the app and can be reused across multiple routes or pages.

Understanding the distinction between these two and how to utilize them in tandem is crucial when designing React applications.