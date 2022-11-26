---
title: 'Effective TypeScript by Dan Vanderkam: Key Takeaways'
date: '2022-11-26T05:35:07.322Z'
description: 'My most important takeaways from Effective TypeScript by Dan Vanderkam'
tag: ''
author: Simeon Lees
---

In this post I'll summarize some of the high-level advice from Dan Vanderkam's book on how to build a mental model of TypeScript. Instead of diving into code and inner workings, I'll focus on what I found to be the most helpful ways to view how the language works.

1. **You should think of types as simply a set of possible values.** Any check in TS is basically checking if one type is a subset of another. There's a reason type names are called type aliases; the name is unimportant, and TS is simply comparing the contents to something else.
2. **Let TS infer types.** TS is pretty good at guessing the types of values, and adding explicit types can clutter code and cause issues if not updated when code is. Cases to use explicit types are:
   - TS doesn't know what the type is (e.g. data from an API)
   - Return types on functions - though TS can often infer here, explicit return types can prevent mistakes
   - Object literals, to make use of [excess property checking](https://www.typescriptlang.org/docs/handbook/interfaces.html#excess-property-checks)
3. **Stricter is pretty much always better.** More strictness means more ways bugs can be caught at runtime. An obvious example here is avoiding `any`, but some others are:
   - Ensure tsconfig is strict. Two important flags here are `strictNullChecks` and `noImplicitAny`
   - Only use [type assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions) when TS can't know what the data type is
   - Use `readonly` when applicable
4. **DRY applies to TS.** If you wouldn't duplicate it in code, you shouldn't duplicate it in types. For all the same reasons!
