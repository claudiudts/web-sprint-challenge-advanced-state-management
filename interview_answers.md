# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
    Contex API is a communication tool that gets parts of state, it helps when writing code in Redux.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   actions: a group of functions that dispatch objects to the reducer
   reducers: a switch/case application that can update state
   store: a location that holds data needed for the app

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
  thunk allows us to make asynchronous calls, we have accountability for our promises 

4. What is your favorite state management system you've learned and this sprint? Please explain why!
    it would have to be the reducers and the simplicity it brings when creating state updates 