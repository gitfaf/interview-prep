# Expression generator

### Random expression

Generate expressions for a number randomly using +1, *2 and *3 as operators to a given value.

```
    console.log(findExpression(24));
    ((((((((((((((1 * 2) + 1) + 1) + 1) * 3) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1)

    console.log(findExpression(24));
    ((((((((1 * 3) + 1) + 1) * 2) + 1) * 2) + 1) + 1)

    console.log(findExpression(24));
    (((((((((((1 * 2) * 2) + 1) + 1) * 3) + 1) + 1) + 1) + 1) + 1) + 1)

    console.log(findExpression(24));
    ((((1 + 1) * 3) * 2) * 2)
```

### Shortest expression

Generates shortest possible expression.

```
    console.log(shortestExpression(24));
    (((((((((1 * 3) * 3) * 2) + 1) + 1) + 1) + 1) + 1) + 1)
```
Note: I know that this is wrong answer. Will circle back to it.
