1. What problem does the context API help solve?

- Context API is useful for sharing data between multiple components without having to pass props down from every parent to child component. It keeps things from getting congested and confusing in your code. It eradicates the need to pass props down to a component that may not need the actual data just to share that data with the child component. In other words, it eliminates prop drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- *Actions*: Actions are bits of code that describe the events that happen in the UI when a user interacts with it. They each have an individual type and sometimes a payload, or resulting data, that is returned after the action is sent.They are sent, or dispatched, to the reducers when activated...
- *Reducers*: Reducers have the important role of reciving actions that are dispatched and updating the UI with the changes that are caused by those actions. They take in an applications state, and actions. They are also used to set and display the initial state of an application. When a reducer recieves a dispatched action, it takes the data that results in that action and sends it to the application's store...
- *Store*: Store is where all of the application's state is kept. 
 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

-  Application state is global and every component in the application can access that data. Component state is local to that specific component and unless it's passed through props, no other components can access that data. It's a good idea to use application state when you have an application consisting of multiple components that all need access to the same state. For smaller scale components with no need to share the state to any other parts of the application, it's probably best to use component state.


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- Redux-Thunk is a middleware library that makes it possible to implement asyncronous operations in Redux. A thunk is a function that's returned by another function.


5. What is your favorite state management system you've learned and this sprint? Please explain why!

- As I've become more familiar with Redux I think it's slowly becoming my preferred state management system. I enjoyed working with Context API, but Redux takes the management and functionality that I like so much in Context API and packages it in better way in my opinion.
