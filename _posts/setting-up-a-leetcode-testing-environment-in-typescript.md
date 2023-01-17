---
title: 'Setting up a LeetCode testing environment in TypeScript'
date: '2023-01-12T05:35:07.322Z'
description: 'Setting up a LeetCode testing environment in TypeScript'
tag: ''
author: Simeon Lees
---

[LeetCode](https://leetcode.com/) is a platform for practicing technical interview question. Though it supports TypeScript, its built-in editor doesn't offer type validation, nor many of the features we know and love in modern code editors. In this post, we're going to build a TypeScript project that allows us to answer LeetCode questions locally using TypeScript and Jest.

_If you want to jump ahead to the finished project, visit the repo here: [https://github.com/sim8/leetcode-scratchpad](https://github.com/sim8/leetcode-scratchpad)_

### Step 1: Initialize empty project

Here we initialize an empty NPM project. Optionally you can also initialize a git repository here (which I'd recommend!)

```bash
npm init
# Follow setup instructions
```

### Step 2: Install dependencies

Firstly we'll setup TypeScript by creating a `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

Our next dependency to install is [Jest](https://jestjs.io/). Jest is a JS testing framework, which will be the basis of us testing our LeetCode solutions locally. Here we install `jest` itself as well as the babel preset required for TypeScript support.

```bash
npm install --save-dev jest @babel/preset-typescript
```

Next, we initialise a Jest config file:

```bash
jest --init
```

Finally, we need to add `@babel/preset-typescript` to our `babel.config.js`:

```javascript
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
};
```

Another optional (and recommended) step here is installing [Prettier](https://prettier.io/docs/en/install.html). This means code formatting will never trip you up, and is often a timesaver even with the smallest of projects.

### Step 3: Building our test runner

Our next step is to build the code that will run our test cases for each LeetCode problem. Importantly, we'll build this in a way that allows us to specify test cases _in the same files_ as our solution code, which will make things easier for us once we're solving the problems. Let's go!

```typescript
// I'd typically put types in a top-level types.ts
// (particularly if I'm reusing them elsewhere).
// Putting here for display purposes :)

export type AlgorithmType = (...args: any[]) => any;

// Type the test cases
export type TestCase<Algorithm extends AlgorithmType> = {
  inputs: Parameters<Algorithm>;
  output: ReturnType<Algorithm>;
};

// Use a TS generic for the algorithm, so we get correct
// typing throughout
export function buildTests<Algorithm extends AlgorithmType>({
  algorithm,
  testCases,
}: {
  algorithm: Algorithm;
  testCases: TestCase<Algorithm>[];
}) {
  testCases.forEach((testCase) => {
    // Iterate each test case, printing out the inputs
    test(`Test case: ${testCase.inputs}`, () => {
      const result = algorithm(...testCase.inputs);
      expect(result).toEqual(testCase.output);
    });
  });
}
```

### Step 4: Bringing it all together

All that's left to do is use our new test runner for solving a LeetCode problem:

```typescript
import { buildTests } from '../utils/buildTests';

function singleNumber(nums: number[]): number {
  // Now for the important part, which is up to you! 😄
}

buildTests({
  algorithm: singleNumber,
  testCases: [
    // Here you can copy the example test cases from LeetCode. Doing
    // so provides you a quick feedback loop for solving.
    {
      inputs: [[2, 2, 1]],
      output: 1,
    },
    {
      inputs: [[4, 1, 2, 1, 2]],
      output: 4,
    },
  ],
});
```

We can then run `npm test` to run our tests, which prints our results:

```bash
 PASS  problems/single-number.ts
  ✓ Test case: 2,2,1 (6 ms)
  ✓ Test case: 4,1,2,1,2 (1 ms)
```
