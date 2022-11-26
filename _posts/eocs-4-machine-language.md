---
title: 'Elements of Computing Systems // 4: machine language'
date: '2022-11-26T05:35:07.322Z'
description: Chapter summary of Elements of Computing Systems chapter 4 - machine language.
tag: Elements of Computing Systems
author: Simeon Lees
---

- Registers - processors normally equipped with some onboard registers, for faster access over the off-chip memory. Divided into data registers and address registers, the latter of which may hold data or point to a memory location, providing instant access
- Symbols - symbolic references in machine language, e.g. to memory locations. These are essential for decoupling from physical systems
- Data memory (RAM) - stores data!
- Instruction memory (ROM) (read only memory) - stores instructions!
- Assembly language - a level up from machine language. Symbolic; i.e. includes symbols which need translating to machine language

The physical machine is just as designed for the machine language as vice versa. The two are tightly coupled

3 registers used in Hack machine language:

1. Data register - denoted by `D.` stores a value to manipulate
2. Address register - denoted `A.` can store data too, and is actually the only way to use constants in ML (e.g `@17`)
3. Selected memory data register - selected register in memory, selected by A.

The command `@17` (inserting 17 to address register) does two things:

1. Selects 17 in RAM, as M
2. Selects 17 in ROM, as current instruction

^ you can then either do something with M, or with current instruction. Or neither! Really depends on ML

The command `0;JMP` will then branch and execute the selected instruction (unconditionally)
The command `D;JEQ` evaluates D. If zero, it executes selected instruction conditionally
The command `D;JGT` - great than! Opposite of D;JEQ I guesss

Hack language boils down to two instructions:

1. A-instruction: specifies an address in memory. Left most bit is set to 0, denoting it as an A-instruction
2. C-instruction: specifies a computation, broken down into three parts: what to compute, where to save, and where to jump

@addr selects both RAM and ROM. To avoid conflicting usage of A register, a best practice is pattern is for a C-instruction to not contain M references when specifying a jump, and vice versa no jump when referencing M.8

Some premade variables exist R0 - R15 (virtual registers) - these are just for readability, as their use implies they’re for data registers (even though they can be used for RAM + ROM access)

SCREEN + KBD are bound to addresses used for controlling screen and reading from keyboard

Labels - like this (xxx)
Binds address to very next instruction

File Types

- .hack - machine language (binary)
- .asm - assembly language (symbolic)

POINTERS! Effectively in machine language, this is where we’re dynamically selecting a memory address via another variable. This is an important paradigm when handling arrays or objects. Some pseudocde here:
X = 17: sets x to 17
\*X = 17: sets the memory address {x} to 17
