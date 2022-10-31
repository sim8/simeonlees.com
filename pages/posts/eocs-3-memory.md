---
title: 'Elements of Computing Systems // 3: memory'
date: 2022/11/02
description: Chapter summary of Elements of Computing Systems chapter 3 - memory.
tag: Elements of Computing Systems
author: Simeon Lees
---

# Elements of Computing Systems: Memory

Another key quality of processing chips is their ability to store values over time. To achieve this, a family of "memory chips" can be combined with chips from prior chapters.

- **Combination chips** - time-independent. E.g. And, Or
- **Sequential chips** - temporal chips that change according to a clock
- **Registers** - maintain state over time
- **Cycle** - time between a Tick and a Tock
- **RAM** - comprised of multiple registers, with O(1) access
- **Counter** - chip that increments over time
- **Data flip flop** - acts as a delay of it’s input; on each clock cycle, output is previous input

Continuous time isn’t represented in chips. Instead, we use small cycles, and just count them

- Cycles remove ambiguity
- AND enables syncing of effects between chips
- By design, they’re longer than chips take to compute
- Cycles on modern computers are a billionth of a second!!!

DFF gates often built from nand gates, yet design is complex
