---
title: 'Elements of Computing Systems // 2: boolean arithmetic'
date: '2022-11-01T05:35:07.322Z'
description: Chapter summary of Elements of Computing Systems chapter 2 - boolean arithmetic.
tag: Elements of Computing Systems
author: Simeon Lees
---

Basic logic gates can be combined to create an **ALU** (arithmetic logic unit) which is the centerpiece of a CPU. Basic arithmetic is how low-level computing is carried out.

- All boolean arithmetic can be carried out by addition. Wha?
- **Word size** - number of bits a computer is using to represent a chunk of information, e.g. an integer
- Byte, short, int, long correspond to 8, 16, 32, 64 bit integers!
- Negative numbers represented by counting down from max (2 to power of n - m).This is called **two’s complement** or **radix complement** method. Has a few cool properties:
  - All negative start with 1 (In top half of range)
  - Addition of pos/neg can be done very easily with a cheap algorithm
- ALU will often only carry out a portion of arithmetic functions directly. Rest are often handled by OS
