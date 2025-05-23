# Notes

|     🍅 | Description                                       |
| -----: | ------------------------------------------------- |
|      1 | Added BACKLOG.md with highlevel refactoring plan  |
|      2 | Added Mikado plan to TECHDEBT.md                  |
|   3, 4 | Make code more readable by using meaningful names |
|   5, 6 | Fix Sonarqube issues part 1                       |
|      7 | Fix Sonarqube issues part 2                       |
|      8 | Fix _Feature envy_ issues                         |
|      9 | Fix _Data clumps_ issue                           |
| 10, 11 | Fix _Primitive obsession_ issue                   |
|  12-15 | Add support for multiple rovers                   |

**_N.B._**: I spent more 🍅 than expected, because I didn't feel very well, but
I'm having so much fun with this kata that I just kept going. Also, this was the
first time I used a Mikado plan myself, and that did slowed me down a bit.

I also spent some time trying to figure out how to use `@typescript-eslint` to
determine dead code, but it turned out it's only reporting unused variables and
unused private methods.

The last commit for after I finished refactoring the code is
[`a5dee38`](https://github.com/MacMannes/smelly-mars-rover-kata/tree/a5dee381b4cf539ec90ff44ebde88eadf1014fb1).
If I have time, I will also try to add support for multiple rovers.
