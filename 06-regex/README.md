# Let's build regex engine from scratch

## Introduction
In this project, we will build a regex engine from scratch. We will implement the following regex operators:
- Literal: `a`, `Z`, `5` , `#`, `&` etc.
- Wildcard: `.`
- Group: `( )`
- Excaped : `\x`
- Optional: `?`
- Zero or more: `*`

## Steps
### Step 1: Parsing
We will parse the regex string and convert it into a list of tokens. Each token will have a type and a value. For example, the regex `a*` will be converted into the following tokens:
```
[
  { type: 'element', value: 'a', quantify: 'zeroOrMore' },
]
```
At the end of this step, we will have a list of tokens that we can use to test the regex.

