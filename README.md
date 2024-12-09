# React useState Hook: Functional Update Ignored

This example demonstrates a common issue when using the `useState` hook in React: functional updates being unexpectedly ignored.

## The Problem

The `handleClick` function updates the `count` state twice in quick succession using functional updates. Due to how React batches state updates, the second `setCount(count + 1)` call uses the *previous* value of `count`, leading to unexpected behavior.

## The Solution

The solution involves using the functional update correctly or keeping track of previous values to ensure that the update is based on the current state value. 

## How to reproduce and fix

1. Clone this repo
2. Run `npm install`
3. Run `npm start`
4. Observe the unexpected increment behavior.
5. Examine the solution for the correct implementation.