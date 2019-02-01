1. In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Starting with the store, store holds all of the data, or state, that we need throughout our app. Any component that needs any or all of this global state can be connected to the store and get what it needs. This is also why the store is referred to as the "single source of truth". Actions get or send data from your app to the store. This could be user supplied data, or data that is obtained from an API. Reducers find out what data the actions are changing and makes the appropriate changes to state.


 2. What is the difference between Application state and Component state? When would be a good time to use one over the other?

 Global (application) and Local (component). If many components will need access to state, it should be on the Global level, in the Redux store. If a component needs state that does not need to be shared it should have its own local, component state. The use of each would be determined by the particular component's needs and usage.


 3. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

 Thunk is middleware, meaning it gets between, or in the middle of data being passed from Action to reducers. In the case of thunk, it allows for our actions to be handled asynchronously. Specifically, it allows Action Creators to return a function instead of just the action.