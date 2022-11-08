---
title: 'Elements of Computing Systems // 1: boolean logic'
date: '2022-10-31T05:35:07.322Z'
description: Chapter summary of Elements of Computing Systems chapter 1 - boolean logic.
tag: Elements of Computing Systems
author: Simeon Lees
---

Basic logic gates (AND, OR, NAND) are the most atomic building blocks of computers and can quickly be combined to create chips capable of arithmetic.

- Examples of gates: **And**, **Or**, **Xor**, **Multiplexer**, **Demultiplexer**, + multi bit versions
- Boolean truth table (each permutation) can be derived from boolean expression, and vice versa
- **HDL** (Hardware Description Language) used to define logic of chip, which can be handed to manufacturers
  - Those specs typically ran through all test cases
- Bitwise operators - apply operator to each bit in given operands
- Multi-way/Multi-bit inputs work the same but allow M inputs. For a multiplexer/demultiplexer, there need to be log2m inputs to select the right input
  - Log2(3) = 8 === 2 to power of 3 = 8
- Behavioral simulation - implementing logic in conventional code, to test before committing to HDL
- Use of boolean algebra to describe behavior of logic gates articulated by Claude Shannon in 1937. Argued most important MSc thesis in comp sci
