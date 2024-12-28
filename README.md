# React useState Update Race Condition

This repository demonstrates a common bug in React applications involving the `useState` hook and race conditions when updating state multiple times in quick succession.

The `bug.js` file shows the problematic code, where attempts to update the state twice in a row result in unexpected final state.

The `bugSolution.js` file offers a corrected approach using the functional update method of `useState` to handle this race condition.